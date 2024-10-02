import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  tasks: {
    taskName: string;
    isCompleted: boolean;
  }[] = [];

  newTask: string = '';
  addTask() {
    if (this.newTask.trim()) {
      this.tasks.push({
        taskName: this.newTask,
        isCompleted: false,
      });
      this.newTask = '';
    }
  }
  removeTask(index: number) {
    this.tasks.splice(index, 1);
  }
  markAsCompleted(index: number) {
    this.tasks[index].isCompleted = !this.tasks[index].isCompleted;
  }
}
