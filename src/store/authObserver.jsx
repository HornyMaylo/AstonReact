import { useState, useMemo, createContext, memo } from 'react';

import getDataFromLS from '../utils/getDataFromLS';
import currentUserKeyCreator from '../utils/currentUserKeyCreator';
import { useDispatch } from 'react-redux';
import { updateFavorite } from './slices/favoriteReducer';
import { updateHistory } from './slices/historyReducer';

const AuthContext = createContext();
memo(AuthContext);

function AuthObserver({ children }) {
  const dispatch = useDispatch();
  const [isAuth, setIsAuth] = useState(
    localStorage.getItem('currentUser') === null
      ? false
      : !!JSON.parse(localStorage.getItem('currentUser')).email,
  );

  if (isAuth) {
    const favFilms = getDataFromLS(currentUserKeyCreator('favorite')) || [];
    const history = getDataFromLS(currentUserKeyCreator('history')) || [];
    favFilms.map((id) => {
      dispatch(updateFavorite(id));
    });
    history.map((query) => {
      dispatch(updateHistory(query));
    });
  }

  const changeAuth = () => {
    setIsAuth(!isAuth);
  };

  const authApi = useMemo(() => [isAuth, setIsAuth], [isAuth]);
  return (
    <AuthContext.Provider value={{ authApi, changeAuth }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthObserver };
