import { createAction, props } from '@ngrx/store';
import { FoodItem } from '../models/food-item.model';

export const addFoodItem = createAction(
  '[Food] Add Food Item',
  props<{ foodItem: FoodItem }>()
);

export const removeFoodItem = createAction(
  '[Food] Remove Food Item',
  props<{ id: number }>()
);