import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import dataFromFile from '../../../../public/assets/food menu.json'
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
  constructor(private objMenuRoute:ActivatedRoute){
    this.foodData = dataFromFile    
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
