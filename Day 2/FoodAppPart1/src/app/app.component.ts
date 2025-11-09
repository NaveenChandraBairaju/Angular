import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BasicfooddataComponent } from './basicfooddata/basicfooddata.component';
import { FooditemsummaryComponent } from './fooditemsummary/fooditemsummary.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BasicfooddataComponent,FooditemsummaryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FoodAppPart1';
  
}

