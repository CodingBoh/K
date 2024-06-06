import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import { Cart } from '../model/Cart.model';
import { Product } from '../model/Product.model';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-blanks',
  templateUrl: './blanks.page.html',
  styleUrls: ['./blanks.page.scss'],
})
export class BlanksPage  {


  favorites = [];

  constructor(private productService: CartService) { }

  ngOnInit() {
    this.loadFavorites();
  }

  loadFavorites() {
    this.favorites = this.productService.getFavorites();
  }

  removeFromFavorites(product) {
    this.productService.removeFromFavorites(product);
    this.loadFavorites();
  }
}
