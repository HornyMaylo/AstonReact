import { configureStore } from '@reduxjs/toolkit';
import { user } from './slices/userReducer';
import { favorites } from './slices/favoriteReducer';
import { history } from './slices/historyReducer';
import { filmsApi } from './Api/films';

export const store = configureStore({
  reducer: {
    [filmsApi.reducerPath]: filmsApi.reducer,
    user,
    favorites,
    history,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(filmsApi.middleware),
});
