import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FoodState } from './food.reducer';

export const selectFoodState = createFeatureSelector<FoodState>('food');

export const selectAllFoodItems = createSelector(
  selectFoodState,
  (state) => state.items
);

export const selectTotalItems = createSelector(
  selectAllFoodItems,
  (foodItems) => foodItems.length
);

export const selectTotalPrice = createSelector(
  selectAllFoodItems,
  (foodItems) => foodItems.reduce((total, item) => total + item.price, 0)
);