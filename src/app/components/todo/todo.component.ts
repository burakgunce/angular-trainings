import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/todo';

import { TodoResponceModel } from '../../models/todoResponseModel';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent implements OnInit{

  todos:Todo[] = [];
  dataLoaded = false;
  // todoResponceModel:TodoResponceModel = {
  //   data : this.todos,
  //   message : "",
  //   success : true
  // };
  constructor(private todoService:TodoService){}

  ngOnInit(): void {
    this.getTodos();
  }

  getTodos(){
    this.todoService.getTodos().subscribe((response) => {
      this.todos = response
      this.dataLoaded = true;
    })
  }

}


