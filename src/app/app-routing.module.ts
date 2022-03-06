import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskAddComponent } from './task-add/task-add.component';
import { TaskEditComponent } from './task-edit/task-edit.component';
import { TaskViewComponent } from './task-view/task-view.component';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
  {
    path:"",
    component:TodoComponent
  },
  {
    path:"tasks/add",
    component:TaskAddComponent
  },
  {
    path: "tasks/:id",
    component: TaskViewComponent
  },
  {
    path: "tasks/:id/edit",
    component: TaskEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
