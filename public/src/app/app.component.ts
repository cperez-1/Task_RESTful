import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { Task } from './task'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  title = 'Task RESTful';
  tasks: Task[] = [];
  task3: any;

  constructor(private _httpService: HttpService){}

  ngOnInit() {
    this.getTasksFromService()
  }

  getTasksFromService(){
    let observable = this._httpService.getTasks();
    observable.subscribe(data => { 
      console.log('Got our data tasks!', data.tasks);
      this.tasks = data.tasks
      this.task3 = data.tasks[2]
    });
  }


}
