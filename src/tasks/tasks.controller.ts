import { Body, Controller,Delete,Get, Param, Patch, Post, Query } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { createTaskInput } from './dtos/create-task.dto';
import { updateTaskInput } from './dtos/update-task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}
    @Get('get-tasks')
    async getTasks() {
      const tasks = await this.tasksService.getTasks();
      return tasks;
    }
    @Post('create-task')
    async createTask(@Body() task: createTaskInput) {
      const newTask = await this.tasksService.createTask(task);
      return newTask;
    }   
    @Patch('update-task/:id')
    async updateTask(@Query('id') id: string, @Body() task: updateTaskInput) {
      const updatedTask = await this.tasksService.updateTask(id, task);
      return updatedTask;
    }
    @Delete('delete-task/:id')
    async deleteTask(@Param('id') id: string) {
      const deletedTask = await this.tasksService.deleteTask(id);
      return deletedTask;
    }
  
}
