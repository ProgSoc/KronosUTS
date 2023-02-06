import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import type SearchParams from '../types/SearchParams';
import Subject from '../types/Subject';

const BASE_URL =
  'https://mytimetablecloud.uts.edu.au/odd/rest/timetable/subjects';

@Injectable()
export class FetcherService {
  constructor(private readonly db: PrismaService) {}

  public async fetchSubject(id: number) {
    const body = {
      'search-term': `${id}`,
      semester: 'ALL',
      campus: 'ALL',
      faculty: 'ALL',
      type: 'ALL',
      days: [
        '1' as const,
        '2' as const,
        '3' as const,
        '4' as const,
        '5' as const,
        '6' as const,
        '0' as const,
      ],
      'start-time': '00:00',
      'end-time': '23:00',
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

    console.log({ urlParams: urlParams.toString() });

    const posted = await fetch(BASE_URL, {
      body: urlParams.toString(),
      method: 'POST',
    });

    const data: Record<string, Subject> = await posted.json();

    console.log({ data });

    return data;
  }
}
