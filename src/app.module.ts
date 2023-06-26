import { Module } from '@nestjs/common';
import { TodoModule } from './todo/todo.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoSchema } from './@core/infra/db/typeorm/todo.schema';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database.sqlite',
      synchronize: true,
      logging: true,
      entities: [TodoSchema],
    }),
    TodoModule,
  ],
})
export class AppModule {}
