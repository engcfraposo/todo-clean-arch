import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { ListTodoUseCase } from 'src/@core/application/todo/list-todo.use-case';
import { CreateTodoUseCase } from 'src/@core/application/todo/create-todo.use-case';
import { UpdateTodoUseCase } from 'src/@core/application/todo/update-todo.use-case';
import { DeleteTodoUseCase } from 'src/@core/application/todo/delete-todo.use-case';
import { FindTodoUseCase } from 'src/@core/application/todo/find-todo.use-case';
import { IsCompletedTodoUseCase } from 'src/@core/application/todo/iscompleted-todo.use-case';

@Injectable()
export class TodoService {
  constructor(
    private createTodoUseCase: CreateTodoUseCase,
    private listTodoUseCase: ListTodoUseCase,
    private updateTodoUseCase: UpdateTodoUseCase,
    private deleteTodoUseCase: DeleteTodoUseCase,
    private findTodoUseCase: FindTodoUseCase,
    private isCompletedUseCase: IsCompletedTodoUseCase,
  ) {}
  async delete(id: string) {
    await this.deleteTodoUseCase.execute(id);
  }
  update(id: string, updateTodoDto: UpdateTodoDto) {
    return this.updateTodoUseCase.execute(id, updateTodoDto as any);
  }
  findAll() {
    return this.listTodoUseCase.execute();
  }
  create(createTodoDto: CreateTodoDto) {
    return this.createTodoUseCase.execute(createTodoDto);
  }

  isCompleted(id: string, active: boolean) {
    return this.isCompletedUseCase.execute(id, active);
  }
  findById(id: string) {
    return this.findTodoUseCase.execute(id);
  }
}
