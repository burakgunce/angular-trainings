import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { TodoService } from '../../services/todo.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrl: './todo-add.component.css'
})
export class TodoAddComponent implements OnInit {
  
  todoAddForm:FormGroup;
  constructor(private formBuilder:FormBuilder, private todoService:TodoService, private toastrService:ToastrService){}
  
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

  add(){
    if (this.todoAddForm.valid) {
      let todoModel = Object.assign({}, this.todoAddForm.value)
      this.todoService.add(todoModel).subscribe(response => {
        console.log(response)
        this.toastrService.success("Todo Eklendi", "Başarılı")
      })
      
    }
    else{
      this.toastrService.error("Ürün Eklenemedi", "Hata")
    }
  }

  add2(){
    if (this.todoAddForm.valid) {
      let todoModel = Object.assign({}, this.todoAddForm.value)
      this.todoService.add2(todoModel).subscribe(response => {
        console.log(response)
        this.toastrService.success(response.message, "Başarılı")
      }, responseError => {
        console.log(responseError)
        this.toastrService.error(responseError)
      })
      
    }
    else{
      this.toastrService.error("Ürün Eklenemedi", "Hata")
    }
  }



}
