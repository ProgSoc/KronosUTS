import {
  INestApplication,
  Injectable,
  Logger,
  OnModuleInit,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  constructor(
    private readonly configService: ConfigService,
    private readonly logger = new Logger(PrismaService.name),
  ) {
    const url = configService.getOrThrow('DATABASE_URL');

    logger.debug({ url });

    super({
      datasources: {
        db: {
          url,
        },
      },
    });
  }

  async onModuleInit() {
    await this.$connect();
    this.logger.log('Connected Successfully');
  }

  async enableShutdownHooks(app: INestApplication) {
    this.$on('beforeExit', async () => {
      await app.close();
      this.logger.log('Shutdown Successfully');
    });
  }
}
