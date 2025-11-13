import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodMenuService } from '../../SharedServices/food-menu.service';
@Component({
  selector: 'app-menudetails',
  standalone: true,
  imports: [],
  templateUrl: './menudetails.component.html',
  styleUrl: './menudetails.component.css'
})
export class MenudetailsComponent {
  selectedID:any;
  foodData:any;
  selectedFoodData:any;
  constructor(private objMenuRoute:ActivatedRoute,private objFoodMenuService:FoodMenuService){
    this.foodData = this.objFoodMenuService.getFoodMenuData();    
    this.objMenuRoute.params.subscribe((param:any)=>{
      this.selectedID = param['menuid']; 
      this.loadSpecificFoodData()
    })
  }
  loadSpecificFoodData(){  
    for(let item of this.foodData){
      if(item.id==this.selectedID){
        this.selectedFoodData = item;
        break;
      }
    }

  }

}
