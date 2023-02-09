import { SemesterEnum } from '@/types/Semester';
import { ApiProperty } from '@nestjs/swagger';
import { Subject } from '@prisma/client';
import { Exclude } from 'class-transformer';

export class MinimalSubjectDto implements Subject {
  @ApiProperty()
  public callista_code: string;
  @ApiProperty()
  public description: string;

  @ApiProperty({ enum: SemesterEnum })
  public semester: SemesterEnum;

  constructor(subject: Subject) {
    Object.assign(this, subject);
  }

  @Exclude()
  subject_code: string;
  @Exclude()
  manager: string;
  @Exclude()
  email_address: string;
  @Exclude()
  faculty: string;

  @Exclude()
  campus: string;
  @Exclude()
  show_on_timetable: number;
  @Exclude()
  activity_count: number;
  @Exclude()
  updated_at: Date;
  @Exclude()
  created_at: Date;
}
