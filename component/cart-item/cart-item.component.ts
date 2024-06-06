import { Component, EventEmitter, Input, OnInit, Output, output } from '@angular/core';
import { Cart } from 'src/app/model/Cart.model';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent{
 @Input() item: Cart;

 constructor(private cartService: CartService) {}

 increaseQuantity(product: Cart) {
  this.cartService.increaseQuantity(product);
}

decreaseQuantity(product: Cart) {
  this.cartService.decreaseQuantity(product);
}
}
