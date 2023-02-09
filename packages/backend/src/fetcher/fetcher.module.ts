import { Global, Module } from '@nestjs/common';
import { FetcherService } from './fetcher.service';

@Module({
  providers: [FetcherService],
  controllers: [],
  exports: [FetcherService],
})
export class FetcherModule {}
