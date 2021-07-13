import { Component, OnInit } from '@angular/core';
import { TASK } from '../data/tasksStore';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['../app.component.css']
})
export class AddTaskComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
  }

  tasks = TASK;
  addtask(newtask){
  if( newtask == ""){
    alert("You Must Write Something!!");}
   else{
    this.tasks.push({name: newtask});
   }
   console.log(this.tasks)
  }
 

}
