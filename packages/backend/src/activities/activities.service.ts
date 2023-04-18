import { FetcherService } from '@/fetcher/fetcher.service';
import { PrismaService } from '@/prisma/prisma.service';
import { SemesterEnum } from '@/types/Semester';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ActivitiesService {
  constructor(
    private readonly db: PrismaService,
    private readonly fetcher: FetcherService,
  ) {}

  public async getSubjectsActivities(
    subjectIds: string[],
    semester: SemesterEnum = SemesterEnum.ALL,
  ) {
    const storedSubjects = await this.db.subject.findMany({
      where: {
        callista_code: {
          in: subjectIds,
        },
      },
    });

    const storedSubjectIds = storedSubjects.map(
      (subject) => subject.callista_code,
    );

    const subjectsToFetch = subjectIds.filter(
      (subjectId) => !storedSubjectIds.includes(subjectId),
    );

    const fetchedSubjects = await Promise.all(
      subjectsToFetch.map((subjectId) =>
        this.fetcher.fetchSubject(semester, subjectId),
      ),
    );

    const flatFetchedSubjects = fetchedSubjects.flat();

    const activities = await this.db.activity.findMany({
      where: {
        Subject: {
          callista_code: {
            in: subjectIds,
          },
        },
      },
    });

    return activities;
  }
}
