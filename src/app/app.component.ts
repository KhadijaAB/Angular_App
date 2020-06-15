import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ToDo List App';
  tasks= ['Reading', 'Practicing'];

  addtask(newtask){
  if(newtask==""){
    alert("You Must Write Something!!");}
   else{
    this.tasks.push(newtask);
   }
  }

  removetask(task){
  let i=this.tasks.lastIndexOf(task);
  this.tasks.splice(i,1);
  }

}
