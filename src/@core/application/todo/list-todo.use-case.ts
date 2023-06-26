import { TodoRepositoryInterface } from '../../domain/todo/todo.repository';

type ListTodoOutput = {
  id: string;
  title: string;
  active: boolean;
}[];

export class ListTodoUseCase {
  constructor(private accountRepo: TodoRepositoryInterface) {}
  async execute(): Promise<ListTodoOutput> {
    const todoList = await this.accountRepo.findAll();
    return todoList.map((todo) => todo.toJSON());
  }
}
