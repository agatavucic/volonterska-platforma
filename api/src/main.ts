import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Globalna validacija DTO-ova
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,             // odbaci nepoznata polja
      forbidNonWhitelisted: true,  // izbaci grešku ako dođe nepoznato polje
      transform: true,             // automatski transformira tipove
    }),
  );

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
