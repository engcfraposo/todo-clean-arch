import { TodoRepositoryInterface } from '../../domain/todo/todo.repository';

type IsCompletedTodoOutput = {
  id: string;
  title: string;
  active: boolean;
};

export class IsCompletedTodoUseCase {
  constructor(private accountRepo: TodoRepositoryInterface) {}
  async execute(id: string, active: boolean): Promise<IsCompletedTodoOutput> {
    const todo = await this.accountRepo.isCompleted(id, active);
    return todo;
  }
}
