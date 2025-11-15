import { Injectable } from '@angular/core';
import foodDataFromFile from '../../../public/assets/food menu.json';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
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
  getFoodRecipeDataFromwebsite():Observable<any>{
    return this.objHttpClient.get('https://dummyjson.com/recipes');
    //https://dummyjson.com/recipes

  }
}
