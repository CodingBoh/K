import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from '../model/Cart.model';
import { CartService } from '../service/cart.service';
import { ProductService } from '../service/product.service';
import { Product } from '../model/Product.model';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-blank',
  templateUrl: './blank.page.html',
  styleUrls: ['./blank.page.scss'],
})
export class BlankPage  {
 
  products = [];

  constructor(private productService: ProductService, private navCtrl: NavController) { }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  addToCart(product) {
    this.productService.addToCart(product);
  }

  toggleFavorite(product) {
    if (this.isFavorite(product)) {
      this.productService.removeFromFavorites(product);
    } else {
      this.productService.addToFavorites(product);
    }
  }

  isFavorite(product) {
    return this.productService.getFavorites().some(p => p.id === product.id);
  }

}
