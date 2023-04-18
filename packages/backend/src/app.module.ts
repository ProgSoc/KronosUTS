import { CacheModule, Module } from '@nestjs/common';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { FetcherService } from './fetcher/fetcher.service';
import { SubjectsModule } from './subjects/subjects.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { fileURLToPath } from 'url';
import path from 'path';

const filePath = fileURLToPath(import.meta.url);
const publicDir = path.join(path.dirname(filePath), '../public');

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    CacheModule.register({
      isGlobal: true,
    }),
    EventEmitterModule.forRoot(),
    PrismaModule,
    SubjectsModule,
    ServeStaticModule.forRoot({
      rootPath: publicDir,
    }),
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService, FetcherService],
})
export class AppModule {}
