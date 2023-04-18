import { SemesterEnum } from '@/types/Semester';
import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsOptional, IsString } from 'class-validator';

export class SubjectsActivitiesDto {
  @ApiProperty()
  @IsString({ each: true })
  subjects!: string[];

  @ApiProperty({
    enum: SemesterEnum,
    enumName: 'Semester',
    description: 'Semester to filter subjects by',
    example: 'SPR',
    default: 'ALL',
  })
  @IsOptional()
  @IsEnum(SemesterEnum)
  semester?: SemesterEnum;
}
