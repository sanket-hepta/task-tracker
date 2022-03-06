import { Component, OnInit } from '@angular/core';
import { Task } from '../models/task.model';
import { TaskStorageService } from '../task-storage.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  tasks: Task[];

  constructor(private taskService: TaskStorageService) { }

  ngOnInit(): void {
    this.taskService.init();
    this.tasks = this.taskService.getTasks();
  }

  delete(id:number){
    this.taskService.delete(id);
    this.tasks = this.taskService.getTasks();
  }

}
