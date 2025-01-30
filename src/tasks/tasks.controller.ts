import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { createTaskInput } from './dtos/create-task.dto';
import { updateTaskInput, UpdateTaskQuery } from './dtos/update-task.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { TaskOutput } from './dtos/task-output.dto';
import { AuthGuard } from 'src/guards/auth/auth.guard';

@ApiTags('Tasks')
@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @Get('get-tasks')
  async getTasks(): Promise<TaskOutput[]> {
    const tasks = await this.tasksService.getTasks();
    return tasks;
  }
  @Post('create-task')
  async createTask(@Body() task: createTaskInput) {
    const newTask = await this.tasksService.createTask(task);
    return newTask;
  }
  @Patch('update-task/:id')
  async updateTask(
    @Query() query: UpdateTaskQuery,
    @Body() task: updateTaskInput,
  ) {
    const updatedTask = await this.tasksService.updateTask(query?.id, task);
    return updatedTask;
  }
  @Delete('delete-task/:id')
  async deleteTask(@Param('id') id: string) {
    const deletedTask = await this.tasksService.deleteTask(id);
    return deletedTask;
  }
}
