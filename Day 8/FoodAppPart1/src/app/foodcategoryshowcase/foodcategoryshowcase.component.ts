import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-foodcategoryshowcase',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './foodcategoryshowcase.component.html',
  styleUrl: './foodcategoryshowcase.component.css',
})
export class FoodcategoryshowcaseComponent {
  categories = [
    {
      title: 'Pizzas',
      image: '/images/pizza.jpg',
      description: 'Hot and cheesy pizzas loaded with toppings.',
    },
    {
      title: 'Burgers',
      image: '/images/Burger.jpg',
      description: 'Juicy and crunchy burgers with unique flavors.',
    },
    {
      title: 'Beverages',
      image: '/images/Beverages.jpg',
      description: 'Cold coffees, soft drinks, and fresh juices.',
    },
  ];
}
