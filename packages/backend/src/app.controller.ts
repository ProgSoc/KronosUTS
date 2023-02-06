import {
  CacheInterceptor,
  Controller,
  Get,
  UseInterceptors,
} from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { AppService } from './app.service';
import { FetcherService } from './fetcher/fetcher.service';

@UseInterceptors(CacheInterceptor)
@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly fetcherService: FetcherService,
  ) {}

  @Get()
  async getHello() {
    const subjects = await this.fetcherService.fetchSubject(41025);
    console.log({ subjects });
    return subjects;
  }
}
