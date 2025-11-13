import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FoodMenuService } from '../../SharedServices/food-menu.service';
 
@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [ CommonModule,RouterLink],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
foodData:any =[];
constructor(private objFoodMenuService:FoodMenuService){
  this.foodData = this.objFoodMenuService.getFoodMenuData();
  console.log(this.foodData)
}

}
 