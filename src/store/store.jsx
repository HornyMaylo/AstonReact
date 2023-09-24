import { configureStore } from '@reduxjs/toolkit';
import { user } from './slices/userReducer';
import { filmsApi } from './Api/films';

export const store = configureStore({
   reducer: {
      [filmsApi.reducerPath]: filmsApi.reducer,
      user
   },
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(
         filmsApi.middleware
      )
});
