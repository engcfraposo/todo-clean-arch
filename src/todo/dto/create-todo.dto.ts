import { createZodDto } from 'nestjs-zod';
import { z } from 'nestjs-zod/z';

const CreateTodoSchema = z
  .object({
    id: z.string(),
    title: z.string(),
    active: z.boolean(),
  })
  .required();

// class is required for using DTO as a type
export class CreateTodoDto extends createZodDto(CreateTodoSchema) {}
