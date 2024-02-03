import { Component, OnInit } from '@angular/core';
import { CartItem } from '../../models/cartItem';
import { CartService } from '../../services/cart.service';
import { Todo } from '../../models/todo';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrl: './cart-summary.component.css'
})
export class CartSummaryComponent implements OnInit{
  
  cartItems:CartItem[]=[];

  constructor(private cartService:CartService, private toastrService:ToastrService){}

  ngOnInit(): void {
    this.getCart();
  }

  getCart(){
    this.cartItems = this.cartService.list();
  }

  removeFromCart(todo:Todo){
    this.cartService.removeFromCart(todo);
    this.toastrService.error("Silindi",todo.title + "sepetten silindi")
  }

  

}
