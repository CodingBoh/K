import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from '../model/Cart.model';
import { CartService } from '../service/cart.service';
import { AlertController } from '@ionic/angular';
import { HistoryService } from '../service/history.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  constructor(private cartService: CartService, private alertCtrl: AlertController,
    private historyService : HistoryService) { }

  ngOnInit() {
   
  }

  get Cart(){
    return this.cartService.getCart();
  }

  removeFromCart(product:any){
    this.removeFromCarts(product);
  }

  increaseQuantity(product: Cart) {
    this.cartService.increaseQuantity(product);
  }

  decreaseQuantity(product: Cart) {
    this.cartService.decreaseQuantity(product);
  }

async removeFromCarts(product:any){
    const alert = await this.alertCtrl.create({
      header: 'Remove',
      message: 'Are you sure you want to remove?',
      buttons:[
        {
          text: 'Yes',
          handler: () =>  this.cartService.removeFromCart(product)
        },  
        {
          text: 'No'
        }
      ]
    });
    
    alert.present();
  }

  getTotalPrice(): number {
    return this.cartService.getTotalPrice();
  }
  
  buy() {
    const items = this.cartService.clearCart();
    this.historyService.addToHistory(items);
  }
}
