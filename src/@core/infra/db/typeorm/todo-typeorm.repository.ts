import { Todo } from 'src/@core/domain/todo/todo.entity';
import { TodoRepositoryInterface } from 'src/@core/domain/todo/todo.repository';
import { Repository } from 'typeorm';

export class TodoTypeORMRepository implements TodoRepositoryInterface {
  constructor(private readonly ormRepo: Repository<Todo>) {}
  async create(todo: Todo): Promise<void> {
    await this.ormRepo.save(todo);
  }
  async findAll(): Promise<Todo[]> {
    return this.ormRepo.find();
  }
  async update(id: string, todo: Todo): Promise<void> {
    await this.ormRepo.update(id, todo);
  }
  async delete(id: string): Promise<void> {
    await this.ormRepo.delete(id);
  }
  async findById(id: string): Promise<Todo> {
    return this.ormRepo.findOneBy({ id });
  }
  async isCompleted(id: string, active: boolean): Promise<Todo> {
    await this.ormRepo.update(id, { active });
    return this.findById(id);
  }
}
