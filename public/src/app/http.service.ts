import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { TaskResponse } from './task'

@Injectable({
  providedIn: 'root'
})

export class HttpService {
  constructor(private _http: HttpClient){
    this.getTasks();
  }

  getTasks(){
    return this._http.get<TaskResponse>(`${environment.API_TASKS}/tasks`);
  }

}





