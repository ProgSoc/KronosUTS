import { Module } from '@nestjs/common';
import { SubjectsController } from './subjects.controller';
import { SubjectsService } from './subjects.service';
import { FetcherModule } from '../fetcher/fetcher.module';
import { FetcherService } from '@/fetcher/fetcher.service';

@Module({
  imports: [FetcherModule],
  providers: [SubjectsService, FetcherService],
  controllers: [SubjectsController],
})
export class SubjectsModule {}
