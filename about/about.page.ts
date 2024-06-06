import { Component, Input, OnInit } from '@angular/core';
import { Coffee } from '../model/Coffee.model';
import { ListService } from '../service/list.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Cart } from '../model/Cart.model';
import { CartService } from '../service/cart.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {
ids: number
coffee: Coffee
 favorites = [];

  constructor(public arrayService: ListService, private route: ActivatedRoute,
    public cartService: CartService,
    private toastCtrl: ToastController,
    private router: Router) {
      this.ids = +this.route.snapshot.paramMap.get('id');
     }

  ngOnInit() {
    this.coffee = this.arrayService.getCoffee(this.ids);
  }


  addToCart(item: Cart){
    this.cartService.addToCart(item);
    this.presentToast();
  }
  

  async presentToast(){
    const toast = await this.toastCtrl.create({
      message: 'Coffee added to the cart',
      mode: 'ios',
      duration: 1000,
      position: 'top',
    });

    toast.present();

    
  
}

toggleFavorite(product) {
  if (this.isFavorite(product)) {
    this.cartService.removeFromFavorites(product);
   
  } else {
    this.cartService.addToFavorites(product);
  }
}


isFavorite(product) {
  return this.cartService.getFavorites().some(p => p.id === product.id);
}




}

  

