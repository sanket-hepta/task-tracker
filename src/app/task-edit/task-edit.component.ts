import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from '../models/task.model';
import { TaskStorageService } from '../task-storage.service';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.css']
})
export class TaskEditComponent implements OnInit {

  taskFromGroup: FormGroup;
  id: Number;
  task: Task

  constructor(private formBuilder: FormBuilder, private taskService: TaskStorageService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.taskFromGroup = this.formBuilder.group({
      title:['', Validators.required],
      note:['', Validators.required]
    });

    this.route.paramMap.subscribe(params => {
      let id : any = params.get('id');
      this.task = this.taskService.getTask(parseInt(id));
      console.log(this.task);
      this.id = this.task.id;
      // this.title = this.task.title;
      // this.note = this.task.note;

      this.taskFromGroup.patchValue({
        title: this.task.title,
        note: this.task.note
      });

    });
  }

  updateTask(){
    let title = this.taskFromGroup.value.title;
    let note = this.taskFromGroup.value.note;
    this.task = this.taskService.editTask(this.id, title, note);
    this.router.navigate(['/']);
  }

}
