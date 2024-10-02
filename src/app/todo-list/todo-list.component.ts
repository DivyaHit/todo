import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  task: {
    taskName: string:
    iscompleted: boolean
  
  }[] = [];
  newTask: string = '';
  addTask() {
    if (this.newTask.trim()) {
      this.task.push({
        taskName:
          this.newTask, iscompleted: false
      });
      this.newTask = '';

    }
  }
  removeTask(index: number) {
    this.tasks.splice(index, 1);
  }
  markAsCompleted(index: number) {
    this.tasks[index].iscompleted = !
      this.tasks[index].iscompleted;
  }
}
