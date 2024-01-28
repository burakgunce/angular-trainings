import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl = 'https://jsonplaceholder.typicode.com/users';
  
  constructor(private httpClient:HttpClient) { }

  getUsers():Observable<User[]>{
    return this.httpClient.get<User[]>(this.apiUrl)
  }
}
