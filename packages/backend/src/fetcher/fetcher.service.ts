import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import type SearchParams from '../types/SearchParams';
import Subject from '../types/Subject';
import { Prisma } from '@prisma/client';
import { Semester } from '@/types';

const BASE_URL =
  'https://mytimetablecloud.uts.edu.au/odd/rest/timetable/subjects';

interface SubjectFetchParams extends Partial<SearchParams> {
  'search-term': string;
}

@Injectable()
export class FetcherService {
  constructor(private readonly db: PrismaService) {}

  private async fetch({
    'search-term': searchTerm,
    semester = 'ALL',
    campus = 'ALL',
    faculty = 'ALL',
    type = 'ALL',
    days = [
      '1' as const,
      '2' as const,
      '3' as const,
      '4' as const,
      '5' as const,
      '6' as const,
      '0' as const,
    ],
    'start-time': startTime = '00:00',
    'end-time': endTime = '23:00',
  }: SubjectFetchParams) {
    const body = {
      'search-term': searchTerm,
      semester,
      campus,
      faculty,
      type,
      days,
      'start-time': startTime,
      'end-time': endTime,
    } satisfies SearchParams;

    const urlParams = new URLSearchParams();

    // append the body to the url params
    Object.entries(body).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        value.forEach((v) => urlParams.append(key, v));
      } else {
        urlParams.append(key, value);
      }
    });

    const posted = await fetch(BASE_URL, {
      body: urlParams.toString(),
      method: 'POST',
    });

    const data: Record<string, Subject> = await posted.json();

    const subjectUpserts = Object.values(data)
      .map((subject) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { children, ...rest } = subject;
        return rest;
      })

      .map((subject) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { activities, ...rest } = subject;
        return this.db.subject.upsert({
          where: { subject_code: subject.subject_code },
          update: {
            ...rest,
          },
          create: {
            ...rest,
          },
        });
      });

    const activities = Object.values(data).flatMap((subject) => {
      return Object.entries(subject.activities);
    });

    const activityUpserts = activities.map(([id, activity]) => {
      return this.db.activity.upsert({
        where: { id },
        update: {
          ...activity,
          subjectSubject_code: activity.subject_code,
        },
        create: {
          ...activity,
          subjectSubject_code: activity.subject_code,
          id,
        },
      });
    });

    const createdSubjects = await this.db.$transaction(subjectUpserts);
    await this.db.$transaction(activityUpserts);

    return createdSubjects;
  }

  /**
   * Fetch a list of subjects for a given semester
   * @param semester The semester to fetch the subject for
   * @param code The subject code to fetch
   * @returns The subject that was fetched
   */
  public fetchSubject(semester: Semester, code: string) {
    return this.fetch({ 'search-term': code, semester });
  }
}
