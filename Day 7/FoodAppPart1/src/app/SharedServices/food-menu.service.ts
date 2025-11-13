import { Injectable } from '@angular/core';
import foodDataFromFile from '../../../public/assets/food menu.json';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FoodMenuService {
  private foodMenuData: any ;
  constructor(private objHttpClient:HttpClient){
    this.foodMenuData = foodDataFromFile;
  }
  getFoodMenuData(){
    return this.foodMenuData;
  }
  getFoodRecipeDataFromwebsite(){
    return this.objHttpClient.get('https://dummyjson.com/recipes');
    //https://dummyjson.com/recipes

  }
}
