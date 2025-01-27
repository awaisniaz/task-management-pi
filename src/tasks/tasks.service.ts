import { Injectable } from '@nestjs/common';
import { createTaskInput } from './dtos/create-task.dto';
import { updateTaskInput } from './dtos/update-task.dto';

@Injectable()
export class TasksService {
    private tasks = [{  
        id: 1,
        title: 'Task 1',
        description: 'Description 1',
        completed: false,
    },{
        id: 2,
        title: 'Task 2',
        description: 'Description 2',
        completed: false,
    },{
        id: 3,
        title: 'Task 3',
        description: 'Description 3',
        completed: false,
    },{
        id: 4,
        title: 'Task 4',
        description: 'Description 4',
        completed: false,
    }];

    constructor() {}

    async getTasks() {
        return this.tasks;
    }

    async createTask(task: createTaskInput) {
        this.tasks.push(task);
        return task;
    }

    async updateTask(id: string, task: updateTaskInput) {
        this.tasks[id] = task;
        return task;
    }

    async deleteTask(id: string) {
        this.tasks.splice(+id, 1);
        return { message: 'Task deleted' };
    }
}
