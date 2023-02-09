import { Activity } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';

export class PublicActivityDto implements Activity {
  @ApiProperty()
  id: string;
  @ApiProperty()
  subject_code: string;
  @ApiProperty()
  activity_group_code: string;
  @ApiProperty()
  activity_code: string;
  @ApiProperty()
  campus: string;
  @ApiProperty()
  day_of_week: string;
  @ApiProperty()
  start_time: string;
  @ApiProperty()
  location: string;
  @ApiProperty()
  staff: string;
  @ApiProperty()
  duration: string;
  @ApiProperty()
  selectable: string;
  @ApiProperty()
  availability: number;
  @ApiProperty()
  week_pattern: string;
  @ApiProperty()
  description: string;
  @ApiProperty()
  zone: string;
  @ApiProperty()
  department: string;
  @ApiProperty()
  semester: string;
  @ApiProperty()
  semester_description: string;
  @ApiProperty()
  activity_type: string;
  @ApiProperty()
  start_date: string;
  @ApiProperty()
  color: string;
  @ApiProperty()
  cluster: string;
  @ApiProperty()
  activitiesDays: string[];
  @ApiProperty()
  subjectSubject_code: string | null;
  @Exclude()
  updated_at: Date;
  @Exclude()
  created_at: Date;

  constructor(activity: Activity) {
    Object.assign(this, activity);
  }
}
