import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}
  @Post()
  create(@Body() createTodoDto: CreateTodoDto) {
    return this.todoService.create(createTodoDto);
  }
  @Get()
  findAll() {
    return this.todoService.findAll();
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateTodoDto: UpdateTodoDto) {
    return this.todoService.update(id, updateTodoDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    await this.todoService.delete(id);
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.todoService.findById(id);
  }
  @Patch(':id/active/:active')
  isCompleted(@Param('id') id: string, @Param('active') active: boolean) {
    return this.todoService.isCompleted(id, active);
  }
}
