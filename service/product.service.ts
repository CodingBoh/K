import { Injectable } from '@angular/core';
import { Cart } from '../model/Cart.model';
import { BehaviorSubject } from 'rxjs';
import { CartService } from './cart.service';
import { Product } from '../model/Product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private cartItemCount = new BehaviorSubject<number>(0);
  private cart = [];
  private favorites = [];
  private products = [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
    { id: 3, name: 'Product 3', price: 30 }
  ];
  constructor(private cartService: CartService) {
    this.cartService.getCartItemCount().subscribe(count => {
      this.cartItemCount.next(count);
    });
  }
  getCartItemCount() {
    return this.cartItemCount.asObservable();

}


 getProducts() {
  return this.products;
}

getCart() {
  return this.cart;
}

addToCart(product) {
  const item = this.cart.find(p => p.id === product.id);
  if (item) {
    item.quantity += 1;
  } else {
    this.cart.push({ ...product, quantity: 1 });
  }
}

removeFromCart(product) {
  const index = this.cart.findIndex(p => p.id === product.id);
  if (index > -1) {
    if (this.cart[index].quantity > 1) {
      this.cart[index].quantity -= 1;
    } else {
      this.cart.splice(index, 1);
    }
  }
}

getFavorites() {
  return this.favorites;
}

addToFavorites(product) {
  if (!this.favorites.some(p => p.id === product.id)) {
    this.favorites.push(product);
  }
}

removeFromFavorites(product) {
  this.favorites = this.favorites.filter(p => p.id !== product.id);
}
}