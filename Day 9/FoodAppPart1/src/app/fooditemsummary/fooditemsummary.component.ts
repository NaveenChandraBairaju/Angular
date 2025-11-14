import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-fooditemsummary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fooditemsummary.component.html',
  styleUrl: './fooditemsummary.component.css'
})
export class FooditemsummaryComponent {
  foodName:string;
  originalPrice:number;
  foodRating:number;
  discount:number;
  constructor(){
    this.foodName="veg Burger";
    this.originalPrice=120.80;
    this.discount=0.15;
    this.foodRating=4.5;
  }

}
