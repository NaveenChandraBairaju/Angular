import { Routes } from '@angular/router';
import { FoodListComponent } from './components/food-list/food-list.component';
import { FoodStatsComponent } from './components/food-stats/food-stats.component';


export const routes: Routes = [
  { path: '', component: FoodListComponent },
  { path: 'stats', component: FoodStatsComponent },
  
];