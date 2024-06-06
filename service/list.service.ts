import { Injectable } from '@angular/core';
import { Coffee } from '../model/Coffee.model';
import { ICoffee } from '../interface/ICoffee.interface';
@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor() {
   }

  //  coffee: ICoffee[] = [
  //   new Coffee(1, "Spanish Latte", 100, "/assets/cof1.jpg", "A Spanish latte, or Café con Leche, is an espresso-based drink with normal milk and condensed milk. It’s slightly sweeter than a normal latte but not as sweet as a latte with flavored syrup. The Spaniards usually enjoy the Spanish latte with breakfast."),
  //   new Coffee(2, "Macchiato",  100, "/assets/cof2.jpg","Macchiato is the Italian word for “marked”. It’s called that because a macchiato is a shot of espresso that’s been marked with a bit of foamed milk. Macchiatos are also called, espresso macchiato or caffè macchiato. It’s important to note that macchiato isn’t a watered-down version of espresso."),
  //   new Coffee(3, "Matcha", 100, "/assets/cof3.jpg", "Matcha is a finely ground powder made from specially grown and processed green tea leaves. Originating from Japan, matcha has gained popularity worldwide for its vibrant green color, distinct flavor, and numerous health benefits. Rich in antioxidants, vitamins, and minerals, matcha is prized for its ability to boost metabolism."),
  //   new Coffee(4, "Chocolate Chip",  100,"/assets/cof4.jpg", "Chocolate Chip is the first drink that includes the famous chocolaty chips. It’s a blend of coffee, milk, mocha sauce, vanilla syrup, ice, and chocolate chips. It’s comforting and delicious, a perfect ratio of coffee and chocolate. ")
  //  ]

   getCoffees(): Coffee[] {
    return[
      {
       id: 1, 
       name: "Spanish Latte", 
       price: 100,
       image: "/assets/cof1.jpg",
       description: "A Spanish latte, or Café con Leche, is an espresso-based drink with normal milk and condensed milk. It’s slightly sweeter than a normal latte but not as sweet as a latte with flavored syrup. The Spaniards usually enjoy the Spanish latte with breakfast.",
       category:'Iced',
       quantity: 1,
       favorites: false

      },
      {
        id: 2, 
        name: "Matcha", 
        price: 200,
        image: "/assets/cof2.jpg",
        description: "A Spanish latte, or Café con Leche, is an espresso-based drink with normal milk and condensed milk. It’s slightly sweeter than a normal latte but not as sweet as a latte with flavored syrup. The Spaniards usually enjoy the Spanish latte with breakfast.",
        category:'Iced',
        quantity: 1,
        favorites: false
       },
       {
        id: 3, 
        name: "Macchiato", 
        price: 150,
        image: "/assets/cof3.jpg",
        description: "A Spanish latte, or Café con Leche, is an espresso-based drink with normal milk and condensed milk. It’s slightly sweeter than a normal latte but not as sweet as a latte with flavored syrup. The Spaniards usually enjoy the Spanish latte with breakfast.",
        category:'Hot',
        quantity: 1,
        favorites: false
       },
       {
        id: 4, 
        name: "Chocolate Chip", 
        price: 120,
        image: "/assets/cof4.jpg",
        description: "A Spanish latte, or Café con Leche, is an espresso-based drink with normal milk and condensed milk. It’s slightly sweeter than a normal latte but not as sweet as a latte with flavored syrup. The Spaniards usually enjoy the Spanish latte with breakfast.",
        category:'Frappe',
        quantity: 1,
        favorites: false
       }
    ]
   }

   getCoffee(id : number): Coffee{
    return this.getCoffees().find((coffee) => coffee.id == id);
   }
}
