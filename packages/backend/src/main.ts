import { VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: {
      origin: [
        process.env.NODE_ENV === 'production'
          ? 'prod url'
          : 'http://localhost:5173',
      ],
    },
  });
  app.enableVersioning({
    type: VersioningType.URI,
    prefix: 'v',
  });

  const config = new DocumentBuilder()
    .setTitle('Kronos API Docs')
    .setDescription('The ProgSoc Kronos Timetable API')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
