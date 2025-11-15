import { createReducer, on } from '@ngrx/store';
import { addFoodItem, removeFoodItem } from './food.action';
import { FoodItem } from '../models/food-item.model';

export interface FoodState {
  items: FoodItem[];
}

export const initialState: FoodState = {
  items: [],
};

export const foodReducer = createReducer(
  initialState,
  on(addFoodItem, (state, { foodItem }) => ({
    ...state,
    items: [...state.items, foodItem],
  })),
  on(removeFoodItem, (state, { id }) => ({
    ...state,
    items: state.items.filter((item) => item.id !== id),
  }))
);