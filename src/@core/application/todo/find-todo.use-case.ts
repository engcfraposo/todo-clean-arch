import { TodoRepositoryInterface } from '../../domain/todo/todo.repository';

type FindTodoOutput = {
  id: string;
  title: string;
  active: boolean;
};

export class FindTodoUseCase {
  constructor(private accountRepo: TodoRepositoryInterface) {}
  async execute(id: string): Promise<FindTodoOutput> {
    const todo = await this.accountRepo.findById(id);
    return todo;
  }
}
