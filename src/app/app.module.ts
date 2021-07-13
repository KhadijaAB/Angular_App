import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddTaskComponent } from './add-task/add-task.component';
import { GetRemoveTasksComponent } from './get-remove-tasks/get-remove-tasks.component';

@NgModule({
  declarations:[ AppComponent, AddTaskComponent,GetRemoveTasksComponent],
  imports:      [ BrowserModule, NgbModule ],
  providers:    [ ],
  exports:      [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }