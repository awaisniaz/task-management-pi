import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import helmet from 'helmet';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(
    helmet({
      hsts: {
        maxAge: 315360000,
        includeSubDomains: true,
        preload: true,
      },
    })
  );
  app.useGlobalPipes(new ValidationPipe())

  const options = new DocumentBuilder()
      .setTitle('Task Management API')
      .setDescription('Task Management')
      .setVersion('1.0')
      .addBearerAuth()
      .build();

    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('swagger', app, document, {
      swaggerOptions: { defaultModelsExpandDepth: -1 },
    });
  await app.listen(process.env.PORT ?? 5000);
}
bootstrap();
