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

export const publicRoutes = [
  {
    path: MAIN,
    Component: MainPage,
  },
];
