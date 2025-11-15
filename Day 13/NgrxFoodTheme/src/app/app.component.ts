import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { FoodListComponent } from './components/food-list/food-list.component';
import { FoodStatsComponent } from './components/food-stats/food-stats.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FoodListComponent, FoodStatsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'NgrxFoodTheme';
}