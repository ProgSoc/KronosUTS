import { Module } from '@nestjs/common';
import { ActivitiesController } from './activities.controller';
import { ActivitiesService } from './activities.service';
import { FetcherModule } from '@/fetcher/fetcher.module';
import { FetcherService } from '@/fetcher/fetcher.service';

@Module({
  imports: [FetcherModule],
  controllers: [ActivitiesController],
  providers: [ActivitiesService, FetcherService],
})
export class ActivitiesModule {}
