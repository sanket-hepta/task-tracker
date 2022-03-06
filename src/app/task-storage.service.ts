import { Injectable } from '@angular/core';
import { Task } from './models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskStorageService {

  init_tasks = [
    {
      "id": 1,
      "title": "Mow lawn",
      "note": "Should be done by 28 feb"
    },
    {
      "id": 2,
      "title": "Wash car",
      "note": "Use MkUiars Wax!"
    },
    {
      "id": 3,
      "title": "Buy groceries",
      "note": "Apples, bananas and some tomatoes."
    },
    {
      "id": 4,
      "title": "Add validation",
      "note": "No data validation is implemented in this app : fix this !"
    },
    {
      "id": 5,
      "title": "Add tests",
      "note": "Add some unit tests !"
    }
  ];
  tasks: Task[] = [];
  initialized: Boolean = false;

  constructor() { }

  init(): boolean{
    if(this.initialized){
      console.log("Tasks Already Initialized");
      return false;
    }

    for (let i = 0; i < this.init_tasks.length; i++) {
      this.tasks.push(
        new Task(
          this.init_tasks[i]['id'],
          this.init_tasks[i]['title'],
          this.init_tasks[i]['note'])
      );
    }

    this.initialized = true;

    return true;

  }

  //Get all Tasks
  getTasks(): Task[]{
    this.init();
    return this.tasks;
  }


  //Add New Task to array
  addTask(title: string, note: string){
    let task = new Task(this.getLastID() + 1, title, note);
    this.tasks.push(task);
  }

  getLastID(): number {
    let lastNumber: number = 0;
    this.init();
    this.tasks.forEach(task => {
      if(task.id < lastNumber){
        return;
      }

      lastNumber = task.id;

    });

    return lastNumber;
  }

  delete(id:number){
    let remaining_tasks: Task[] = [];
    for (let i = 0; i < this.tasks.length; i++) {
      var current_task = this.tasks[i];

      // we found the task to remove, we do not include it in our new array
      if (id == current_task.id) {
        continue;
      }

      remaining_tasks.push(this.tasks[i]);
    }

    this.tasks = remaining_tasks;
    return true;
  }

  getTask(id: Number): any{
    this.init();
    
    for (let i = 0; i < this.tasks.length; i++) {
      let task = this.tasks[i];
      // we found the task to remove, we do not include it in our new array
      if (task.id != id) {
        continue;
      }
      return task;
    }

    return null;
  }

  editTask(id: Number, title: String, note: String): Task{
    let task = this.getTask(id);
    task.title = title;
    task.note = note;

    return task;
  }
}
