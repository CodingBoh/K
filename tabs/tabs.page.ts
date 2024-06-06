import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  cartItemCount$ = this.cartBadgeService.getCartItemCount();

  constructor(private cartBadgeService: ProductService) {}

  ngOnInit() {
  }

}
