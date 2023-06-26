import { Todo } from '../../domain/todo/todo.entity';
import { TodoRepositoryInterface } from '../../domain/todo/todo.repository';
type UpdateTodoInput = {
  title: string;
  active: boolean;
};

type UpdateTodoOutput = {
  id: string;
  title: string;
  active: boolean;
};

export class UpdateTodoUseCase {
  constructor(private accountRepo: TodoRepositoryInterface) {}
  async execute(id: string, input: UpdateTodoInput): Promise<UpdateTodoOutput> {
    const todo = Todo.create(input, id);
    await this.accountRepo.update(id, todo);
    return todo.toJSON();
  }
}
