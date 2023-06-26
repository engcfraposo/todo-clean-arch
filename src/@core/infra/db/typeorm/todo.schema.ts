import { Todo } from 'src/@core/domain/todo/todo.entity';
import { EntitySchema } from 'typeorm';

export const TodoSchema = new EntitySchema<Todo>({
  name: 'todo',
  target: Todo,
  columns: {
    id: {
      type: 'uuid',
      primary: true,
    },
    title: {
      type: String,
      length: 255,
    },
    active: {
      type: Boolean,
      default: true,
    },
  },
});
