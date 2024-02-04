import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrl: './todo-add.component.css'
})
export class TodoAddComponent implements OnInit {
  
  todoAddForm:FormGroup;
  constructor(private formBuilder:FormBuilder){}
  
  ngOnInit(): void {
    this.createTodoAddForm();
  }

  createTodoAddForm(){
    this.todoAddForm = this.formBuilder.group({
      userId:["",Validators.required],
      id:["",Validators.required],
      title:["",Validators.required],
      completed:["",Validators.required]
    })
  }

}
