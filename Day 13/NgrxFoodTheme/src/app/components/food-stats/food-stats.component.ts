import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { selectTotalItems, selectTotalPrice } from '../../store/food.selector';

@Component({
  selector: 'app-food-stats',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './food-stats.component.html',
  styleUrl: './food-stats.component.css',
})
export class FoodStatsComponent {
  totalItems$: Observable<number>;
  totalPrice$: Observable<number>;

  constructor(private store: Store) {
    this.totalItems$ = this.store.select(selectTotalItems);
    this.totalPrice$ = this.store.select(selectTotalPrice);
  }
}