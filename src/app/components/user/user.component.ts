import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {
  
  users:User[]=[];
  currentUser: User = {
    id: 0,
    name: "",
    username: "",
    email: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      geo: {
        lat: "",
        lng: "",
      },
    },
    phone: "",
    website: "",
    company: {
      name: "",
      catchPhrase: "",
      bs: "",
    },
  };

  constructor(private userService:UserService){}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this.userService.getUsers().subscribe((response) => {
      this.users = response
    })
  }

  setCurrentUser(user:User){
    this.currentUser = user;
  }

  getCurrentUserClass(user:User){
    if (user == this.currentUser) {
      return "list-group-item active"
    }
    else{
      return "list-group-item"
    }
  }

}
