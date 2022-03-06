import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from '../models/task.model';
import { TaskStorageService } from '../task-storage.service';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.css']
})
export class TaskViewComponent implements OnInit {

  task: Task

  constructor(private taskService: TaskStorageService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      let id : any = params.get('id');
      this.task = this.taskService.getTask(parseInt(id))
    });
  }

}
