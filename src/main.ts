import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder} from '@nestjs/swagger'
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Inventario API')
    .setDescription('RESTful API para inventario de productos')
    .setVersion('1.0')
    //.addTag('cats')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);

  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
  }))

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();