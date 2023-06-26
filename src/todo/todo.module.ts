import { Module } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoController } from './todo.controller';
import { TodoTypeORMRepository } from 'src/@core/infra/db/typeorm/todo-typeorm.repository';
import { DataSource } from 'typeorm';
import { Todo } from 'src/@core/domain/todo/todo.entity';
import { getDataSourceToken } from '@nestjs/typeorm';
import { CreateTodoUseCase } from 'src/@core/application/todo/create-todo.use-case';
import { TodoRepositoryInterface } from 'src/@core/domain/todo/todo.repository';
import { UpdateTodoUseCase } from 'src/@core/application/todo/update-todo.use-case';
import { ListTodoUseCase } from 'src/@core/application/todo/list-todo.use-case';
import { DeleteTodoUseCase } from 'src/@core/application/todo/delete-todo.use-case';
import { IsCompletedTodoUseCase } from 'src/@core/application/todo/iscompleted-todo.use-case';
import { FindTodoUseCase } from 'src/@core/application/todo/find-todo.use-case';

@Module({
  providers: [
    {
      provide: TodoTypeORMRepository,
      useFactory: (dataSource: DataSource) => {
        return new TodoTypeORMRepository(dataSource.getRepository(Todo));
      },
      inject: [getDataSourceToken()],
    },
    {
      provide: CreateTodoUseCase,
      useFactory: (todoRepository: TodoRepositoryInterface) => {
        return new CreateTodoUseCase(todoRepository);
      },
      inject: [TodoTypeORMRepository],
    },
    {
      provide: ListTodoUseCase,
      useFactory: (todoRepository: TodoRepositoryInterface) => {
        return new ListTodoUseCase(todoRepository);
      },
      inject: [TodoTypeORMRepository],
    },
    {
      provide: UpdateTodoUseCase,
      useFactory: (todoRepository: TodoRepositoryInterface) => {
        return new UpdateTodoUseCase(todoRepository);
      },
      inject: [TodoTypeORMRepository],
    },
    {
      provide: DeleteTodoUseCase,
      useFactory: (todoRepository: TodoRepositoryInterface) => {
        return new DeleteTodoUseCase(todoRepository);
      },
      inject: [TodoTypeORMRepository],
    },
    {
      provide: IsCompletedTodoUseCase,
      useFactory: (todoRepository: TodoRepositoryInterface) => {
        return new IsCompletedTodoUseCase(todoRepository);
      },
      inject: [TodoTypeORMRepository],
    },
    {
      provide: FindTodoUseCase,
      useFactory: (todoRepository: TodoRepositoryInterface) => {
        return new FindTodoUseCase(todoRepository);
      },
      inject: [TodoTypeORMRepository],
    },
    TodoService,
  ],
  controllers: [TodoController],
})
export class TodoModule {}
