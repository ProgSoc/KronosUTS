import { IsEnum, IsString } from 'class-validator';
import type { Semester } from '@/types';
import { SemesterEnum } from '@/types/Semester';
import { ApiProperty, ApiQuery } from '@nestjs/swagger';

export class SemesterDto {
  @ApiProperty({
    enum: SemesterEnum,
    enumName: 'Semester',
    description: 'Semester to filter subjects by',
    example: 'SPR',
    default: SemesterEnum.ALL,
  })
  @IsEnum(SemesterEnum)
  semester: SemesterEnum;
}
