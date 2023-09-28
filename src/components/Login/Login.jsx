/* eslint-disable react-hooks/rules-of-hooks */
import { useContext } from 'react';
import { useDispatch } from 'react-redux';

import { LogForm } from './LogForm';
import { setUser } from '../../store/slices/userReducer';
import { AuthContext } from '../../store/authObserver';
import { useGetCurrentUser } from '../../hooks/useGetCurrentUser';
import setDataToLS from '../../utils/setDataToLS';
import getDataFromLS from '../../utils/getDataFromLS';
import currentUserKeyCreator from '../../utils/currentUserKeyCreator';
import { createFavorite } from '../../store/slices/favoriteReducer';
import { createHistory } from '../../store/slices/historyReducer';
import './Login.scss';

export function Login() {
  const dispatch = useDispatch();
  const { changeAuth } = useContext(AuthContext);

  function login(email, password) {
    const arr = Array.from(getDataFromLS('users') || []);
    let answer = false;

    arr.forEach((item) => {
      if (item.email === email && item.password === password) {
        answer = true;
        dispatch(
          setUser({
            email: item.email,
            password: item.password,
          }),
        );
        changeAuth();

        setDataToLS('currentUser', useGetCurrentUser());
        dispatch(
          createFavorite(
            getDataFromLS(currentUserKeyCreator('favorite') || []),
          ),
        );
        dispatch(
          createHistory(getDataFromLS(currentUserKeyCreator('history') || [])),
        );
      }
    });
    return answer;
  }
  return (
    <div className="form">
      <LogForm login={login} />
    </div>
  );
}
