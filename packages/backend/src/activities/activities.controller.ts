import { PublicActivityDto } from '@/subjects/dto/PublicActivity.dto';
import { SemesterDto } from '@/subjects/dto/Semester.dto';
import {
  CacheInterceptor,
  CacheTTL,
  Controller,
  Get,
  Param,
  Query,
  UseInterceptors,
} from '@nestjs/common';
import { ApiOkResponse, ApiOperation } from '@nestjs/swagger';
import { SubjectsActivitiesDto } from './dto/SubjectsActivities.dto';
import { ActivitiesService } from './activities.service';

@Controller('activities')
export class ActivitiesController {
  constructor(private readonly activitiesService: ActivitiesService) {}

  @Get(':code/activities')
  @CacheTTL(60)
  @ApiOperation({
    summary: "Get a subject's activities for a given semester",
    operationId: 'getSubjectActivities',
  })
  @UseInterceptors(CacheInterceptor)
  @ApiOkResponse({ type: [PublicActivityDto] })
  async getSubjectActivities(
    @Query() { semester, subjects }: SubjectsActivitiesDto,
  ): Promise<PublicActivityDto[]> {
    const activities = await this.activitiesService.getSubjectsActivities(
      subjects,
      semester,
    );
    return activities.map((activity) => new PublicActivityDto(activity));
  }
}
