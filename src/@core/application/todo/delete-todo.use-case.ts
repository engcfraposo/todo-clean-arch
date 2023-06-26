import { TodoRepositoryInterface } from '../../domain/todo/todo.repository';

export class DeleteTodoUseCase {
  constructor(private accountRepo: TodoRepositoryInterface) {}
  async execute(id: string): Promise<void> {
    await this.accountRepo.delete(id);
  }
}
