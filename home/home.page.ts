import { Component, Input, OnInit } from '@angular/core';
import { ListService } from '../service/list.service';
import { CategoryComponent } from '../component/category/category.component';
import { List } from '../model/List.model';
import { Coffee } from '../model/Coffee.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

 categories: List[] = []
 coffees: Coffee[] = []
  constructor(public arrayService: ListService, private router: Router) { }

  ngOnInit() {
   this.getCategories();
   this.coffees = this.arrayService.getCoffees();
  }

  getCategories(){
    this.categories = [
      {
        id:1,
        label: "All",
        image: "/assets/items1.png",
        active:true
      },
      {
        id:2,
        label: "Iced",
        image: "/assets/items2.png",
        active:false
      },
      {
        id:3,
        label: "Hot",
        image: "/assets/items3.png",
        active:false
      },
      {
        id:4,
        label: "Frappe",
        image: "/assets/items4.png",
        active:false
      }
    ]
  }

  goToAbout(id: number){
    this.router.navigate(['about', id])
  }


  itemsToShow: any[] = this.arrayService.getCoffees();

  filterItems(category: string, event: any) {
    if (category === 'all') {
      this.itemsToShow = this.arrayService.getCoffees();
    } else {
      this.itemsToShow = this.arrayService.getCoffees().filter(item => item.category === category);
    }

    document.querySelectorAll('.filter-button').forEach(button => button.classList.remove('active'));
    (event.target as HTMLElement).classList.add('active');
  }



}
