import { CacheModule, Module } from '@nestjs/common';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { FetcherService } from './fetcher/fetcher.service';

@Module({
  imports: [CacheModule.register(), EventEmitterModule.forRoot()],
  controllers: [AppController],
  providers: [AppService, PrismaService, FetcherService],
})
export class AppModule {}
