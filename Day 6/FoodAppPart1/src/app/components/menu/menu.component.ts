import { Component } from '@angular/core';
import foodDataFromFile from '../../../../public/assets/food menu.json'
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
 
@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [ CommonModule,RouterLink],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
foodData:any =[];
constructor(){
  this.foodData = foodDataFromFile
  console.log(this.foodData)
}

}
 