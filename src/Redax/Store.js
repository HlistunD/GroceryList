import { configureStore } from '@reduxjs/toolkit';
import dishes from './DishesSlice';

export const store = configureStore({
  reducer: {
    dishes: dishes
  },
})