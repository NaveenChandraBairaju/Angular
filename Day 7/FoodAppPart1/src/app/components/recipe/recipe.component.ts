import { Component } from '@angular/core';
import { FoodMenuService } from '../../SharedServices/food-menu.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recipe',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.css'
})
export class RecipeComponent {
  recipeData:any;
  constructor(private objFoodMenuService:FoodMenuService){
    this.objFoodMenuService.getFoodRecipeDataFromwebsite().subscribe((data:any)=>{
      this.recipeData = data;
    })
    
  }
}
 