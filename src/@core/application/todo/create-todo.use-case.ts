import { Todo } from '../../domain/todo/todo.entity';
import { TodoRepositoryInterface } from '../../domain/todo/todo.repository';
type CreateTodoInput = {
  title: string;
  active: boolean;
};

type CreateTodoOutput = {
  id: string;
  title: string;
  active: boolean;
};

export class CreateTodoUseCase {
  constructor(private accountRepo: TodoRepositoryInterface) {}
  async execute(input: CreateTodoInput): Promise<CreateTodoOutput> {
    const todo = Todo.create(input);
    await this.accountRepo.create(todo);
    return todo.toJSON();
  }
}
