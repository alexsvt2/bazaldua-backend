import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PrismaClientExceptionFilter, PrismaService } from 'nestjs-prisma';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const { httpAdapter } = app.get(HttpAdapterHost);

  const prismaService: PrismaService = app.get(PrismaService);
  prismaService.$on('query', (event) => {
    console.log(event);
  });

  app.useGlobalFilters(new PrismaClientExceptionFilter(httpAdapter));
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors();
  await app.listen(3000);
}

void bootstrap();
