import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TodoResponceModel } from '../models/todoResponseModel';
import { Observable } from 'rxjs';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  apiUrl = 'https://jsonplaceholder.typicode.com/';

  constructor(private httpClient:HttpClient) { }

  getTodos():Observable<Todo[]>{
    let newPath = this.apiUrl + "todos"
    return this.httpClient.get<Todo[]>(newPath);//eger data succes ve message bılgısı gelıyosa generıc response model ve tipini yaz
  }

  getTodosByUser(userId:number):Observable<Todo[]>{
    let newPath = this.apiUrl + "todos?userId=" + userId
    return this.httpClient.get<Todo[]>(newPath);
  }

}
