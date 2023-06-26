import { INestApplication } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { patchNestJsSwagger } from 'nestjs-zod';

export function swagger(app: INestApplication) {
  const config = new DocumentBuilder()
    .setTitle('Todo api')
    .setDescription('Api criada como exemplo de construção de um TODO')
    .setVersion('1.0')
    .addTag('todo')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  patchNestJsSwagger();
}
