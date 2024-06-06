import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Cart } from "../model/Cart.model";

@Injectable({
    providedIn: 'root'
})

export class CartService{

    private cart: Cart[] = [];
    private cartItemCount = new BehaviorSubject<number>(0);
    private favorites = [];
    addToCart(item:Cart){
        this.cart.push(item);
        this.updateCartItemCount();
    }

    removeFromCart(item:Cart){
        const index = this.cart.indexOf(item)
        if (index > -1) {
            this.cart.splice(index, 1);
          }
          this.updateCartItemCount();
    }

    getCart(): Cart[] {
        return this.cart;
      }

      increaseQuantity(product: Cart) {
        const cartProduct = this.cart.find(p => p.id === product.id);
        if (cartProduct) {
          cartProduct.quantity += 1;
        }
      }
    
      decreaseQuantity(product: Cart) {
        const cartProduct = this.cart.find(p => p.id === product.id);
        if (cartProduct && cartProduct.quantity > 1) {
          cartProduct.quantity -= 1;
        } else if (cartProduct && cartProduct.quantity === 1) {
          this.removeFromCart(product);
        }
        this.updateCartItemCount();
      }

      getTotalPrice(): number {
        return this.cart.reduce((total, product) => total + product.price * product.quantity, 0);
      }
      

      clearCart(): Cart[] {
        const items = [...this.cart];
        this.cart.length = 0;
        this.updateCartItemCount();
        return items;
      }

      getCartItemCount() {
        return this.cartItemCount.asObservable();
      }
    
      private updateCartItemCount() {
        const count = this.cart.reduce((total, product) => total + product.quantity, 0);
        this.cartItemCount.next(count);
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