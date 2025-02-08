import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  //Swagger Configurations
  const config = new DocumentBuilder()
    .setTitle('NestJS Introduction Course')
    .setDescription('Introduction couse for NestJS')
    .setTermsOfService('http://swagger.io/terms/')
    .addServer('http://localhost:3000')
    .setVersion('1.0')
    .build();
  //Instantiate Document
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
