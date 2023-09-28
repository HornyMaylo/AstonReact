import { lazy } from 'react';

import {
  REGISTER,
  ITEM,
  SEARCH,
  LOGIN,
  HISTORY,
  MAIN,
  FAVORITE,
} from '../../urlPieces/urlPieces';


const MainPage = lazy(() => import('../../pages/MainPage/MainPage'));
const FilmPage = lazy(() => import('../../pages/FilmPage/FilmPage'));
const SearchPage = lazy(() => import('../../pages/SearchPage/SearchPage'));
const RegisterPage = lazy(() =>
  import('../../pages/RegistrationPage/RegistrationPage'),
);
const LoginPage = lazy(() =>
  import('../../pages/LoginPage/LoginPage'),
);
const FavPage = lazy(() => import('../../pages/FavoritePage/FavoritesPage'));
const HisPage = lazy(() => import('../../pages/HistoryPage/HistoryPage'));

export const publicRoutes = [
  {
    path: MAIN,
    Component: MainPage,
  },
  {
    path: ITEM,
    Component: FilmPage,
  },
  {
    path: SEARCH,
    Component: SearchPage,
  },
  {
    path: REGISTER,
    Component: RegisterPage,
  },
  {
    path: LOGIN,
    Component: LoginPage,
  },
];

export const authRoutes = [
  {
    path: FAVORITE,
    Component: FavPage,
  },
  {
    path: HISTORY,
    Component: HisPage,
  },
];
