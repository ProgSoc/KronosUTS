import { CacheModule, Module } from '@nestjs/common';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { FetcherService } from './fetcher/fetcher.service';
import { SubjectsModule } from './subjects/subjects.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    CacheModule.register({
      isGlobal: true,
    }),
    EventEmitterModule.forRoot(),
    PrismaModule,
    SubjectsModule,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService, FetcherService],
})
export class AppModule {}
