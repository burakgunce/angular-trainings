import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/todo';

import { TodoResponceModel } from '../../models/todoResponseModel';
import { TodoService } from '../../services/todo.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent implements OnInit{

  todos:Todo[] = [];
  dataLoaded = false;
  filterText = "";
  // todoResponceModel:TodoResponceModel = {
  //   data : this.todos,
  //   message : "",
  //   success : true
  // };
  constructor(private todoService:TodoService, private activatedRoute:ActivatedRoute){}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params["userId"]) {
        this.getTodosByUser(params["userId"])
      }
      else{
        this.getTodos()
      }
    })
  }

  getTodos(){
    this.todoService.getTodos().subscribe((response) => {
      this.todos = response
      this.dataLoaded = true;
    })
  }

  getTodosByUser(userId:number){
    this.todoService.getTodosByUser(userId).subscribe((response) => {
      this.todos = response
      this.dataLoaded = true;
    })
  }

}


