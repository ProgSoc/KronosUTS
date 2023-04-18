import type { Activity, Semester } from '@/types';
import {
  CacheInterceptor,
  CacheTTL,
  ClassSerializerInterceptor,
  Controller,
  Get,
  NotFoundException,
  Param,
  Query,
  UseInterceptors,
} from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { MinimalSubjectDto } from './dto/MinimalSubject.dto';
import { SubjectsService } from './subjects.service';
import { PublicActivityDto } from './dto/PublicActivity.dto';
import { SemesterDto } from './dto/Semester.dto';
import { NotFoundError } from 'rxjs';

@ApiTags('Subjects')
@UseInterceptors(ClassSerializerInterceptor)
@Controller('subjects')
export class SubjectsController {
  constructor(private readonly subjectService: SubjectsService) {}

  @Get('/list')
  @CacheTTL(60)
  @ApiOperation({
    summary: 'Get a list of subjects for a given semester',
    operationId: 'getSubjectList',
  })
  @UseInterceptors(CacheInterceptor)
  @ApiOkResponse({ type: [MinimalSubjectDto] })
  async getSubjectList(
    @Query() { semester }: SemesterDto,
  ): Promise<MinimalSubjectDto[]> {
    const subjectItems = await this.subjectService.getSubjectList(semester);
    return subjectItems.map((sub) => new MinimalSubjectDto(sub));
  }

  @Get(':code')
  @CacheTTL(60)
  @ApiOperation({
    summary: 'Get the details of a subject for a given semester',
    operationId: 'getSubjectDetails',
  })
  @UseInterceptors(CacheInterceptor)
  @ApiOkResponse({ type: MinimalSubjectDto })
  async getSubject(
    @Query() { semester }: SemesterDto,
    @Param('code') code: string,
  ): Promise<MinimalSubjectDto> {
    const subject = await this.subjectService.getSubjectDetails(semester, code);
    if (!subject) {
      throw new NotFoundException('Subject not found');
    }
    return new MinimalSubjectDto(subject);
  }

  @Get(':code/activities')
  @CacheTTL(60)
  @ApiOperation({
    summary: "Get a subject's activities for a given semester",
    operationId: 'getSubjectActivities',
  })
  @UseInterceptors(CacheInterceptor)
  @ApiOkResponse({ type: [PublicActivityDto] })
  async getSubjectActivities(
    @Query() { semester }: SemesterDto,
    @Param('code') code: string,
  ): Promise<Activity[]> {
    const activities = await this.subjectService.getSubjectActivities(
      semester,
      code,
    );
    return activities.map((activity) => new PublicActivityDto(activity));
  }
}
