import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TaskStorageService } from '../task-storage.service';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.css']
})
export class TaskAddComponent implements OnInit {

  taskFromGroup: FormGroup;

  constructor(private formBuilder: FormBuilder, private taskService: TaskStorageService, private router: Router) { }

  ngOnInit(): void {
    this.taskFromGroup = this.formBuilder.group({
      title:['', Validators.required],
      note:['', Validators.required]
    });
  }

  createNewTask(){
    let title = this.taskFromGroup.value.title;
    let note = this.taskFromGroup.value.note;
    this.taskService.addTask(title, note);
    this.router.navigate(['/']);
  }

}
