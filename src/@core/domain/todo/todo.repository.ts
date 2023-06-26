import { Todo } from './todo.entity';

export interface TodoRepositoryInterface {
  create(todo: Todo): Promise<void>;
  findAll(): Promise<Todo[]>;
  update(id: string, todo: Todo): Promise<void>;
  delete(id: string): Promise<void>;
  isCompleted(id: string, active: boolean): Promise<Todo>;
  findById(id: string): Promise<Todo>;
}
