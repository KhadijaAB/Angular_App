import { Component, OnInit } from '@angular/core';
import { TASK } from '../data/tasksStore';

@Component({
  selector: 'app-get-remove-tasks',
  templateUrl: './get-remove-tasks.component.html',
  styleUrls: ['../app.component.css']
})
export class GetRemoveTasksComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  tasks = TASK;
  check:boolean = false;

  removetask(task){
    let r = this.tasks.lastIndexOf(task);
    this.tasks.splice( r , 1 );
    }

  complateTask(){
    this.check=true;
    }

}
