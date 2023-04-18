import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/prisma/prisma.service';
import { Semester } from '@/types';
import { FetcherService } from '@/fetcher/fetcher.service';
import { Activity, Subject } from '@prisma/client';
import { SemesterEnum } from '@/types/Semester';

@Injectable()
export class SubjectsService {
  constructor(
    private readonly db: PrismaService,
    private readonly fetcher: FetcherService,
  ) {}

  /**
   * Get a list of stored subjects for a given semester
   * @param sem The semester to get the subject list for
   * @returns List of subjects for the given semester
   */
  public async getSubjectList(sem: SemesterEnum) {
    return this.db.subject.findMany({
      where: {
        semester: sem === SemesterEnum.ALL ? undefined : sem,
      },
    });
  }

  /**
   * Get the details of a subject for a given semester
   * @param sem The semester to get the subject details for
   * @param code The subject code to get the details for
   * @returns The subject details for the given semester and subject code
   */
  public async getSubjectDetails(
    sem: SemesterEnum,
    code: string,
  ): Promise<Subject | undefined> {
    const subject = await this.db.subject.findUnique({
      where: {
        callista_code_semester: {
          callista_code: code,
          semester: sem,
        },
      },
    });

    if (!subject) {
      const newSubjects = await this.fetcher.fetchSubject(sem, code);

      return newSubjects.find(
        (s) =>
          s.callista_code === code &&
          (s.semester === sem || sem === SemesterEnum.ALL),
      );
    }

    return subject;
  }

  /**
   * Get a subject's activities for a given semester
   * @param sem The semester to get the subject activities for
   * @param code The subject code to get the activities for
   * @returns The subject activities for the given semester and subject code
   */
  public async getSubjectActivities(
    sem: SemesterEnum,
    code: string,
  ): Promise<Activity[]> {
    const subjectDetails = await this.getSubjectDetails(sem, code);
    if (!subjectDetails) {
      return [];
    }
    const activities = await this.db.activity.findMany({
      where: {
        semester: sem,
        subjectSubject_code: subjectDetails.subject_code,
      },
    });
    return activities;
  }
}
