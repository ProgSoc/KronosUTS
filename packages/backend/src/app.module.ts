import { CacheModule, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [CacheModule.register()],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
