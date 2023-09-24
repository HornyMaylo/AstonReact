import { configureStore } from '@reduxjs/toolkit';
import { user } from './testReducer';

export const store = configureStore({
   reducer: {
      user
   },
   
});
