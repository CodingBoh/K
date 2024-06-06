import { Injectable } from '@angular/core';
import { Cart } from '../model/Cart.model';


@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  
    private history: { products: Cart[], totalPrice: number }[] = [];

    constructor() {}
  
    addToHistory(products: Cart[]) {
      const totalPrice = products.reduce((total, product) => total + product.price * product.quantity, 0);
      this.history.push({ products, totalPrice });
    }
  
    getHistory(): { products: Cart[], totalPrice: number }[] {
      return this.history;
    }

  }