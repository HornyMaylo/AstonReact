/* eslint-disable react-hooks/rules-of-hooks */
import { useContext } from 'react';
import { useDispatch } from 'react-redux';

import { RegForm } from './RegForm';
import { setUser } from '../../store/slices/userReducer';
import { AuthContext } from '../../store/authObserver';
import { useGetCurrentUser } from '../../hooks/useGetCurrentUser';
import setDataToLS from '../../utils/setDataToLS';
import getDataFromLS from '../../utils/getDataFromLS';
import currentUserKeyCreator from '../../utils/currentUserKeyCreator';
import { createFavorite } from '../../store/slices/favoriteReducer';
import { createHistory } from '../../store/slices/historyReducer';
import './Registration.scss';

export function Registration() {
  const dispatch = useDispatch();
  const { changeAuth } = useContext(AuthContext);

  function registration(email, password) {
    dispatch(
      setUser({
        email: email,
        password: password,
      }),
    );
    setDataToLS('currentUser', useGetCurrentUser());
    changeAuth();
    const arr = Array.from(getDataFromLS('users') || []);
    arr.push(useGetCurrentUser());
    setDataToLS('users', arr);
    
    dispatch(createFavorite([]));
    dispatch(createHistory([]));

    setDataToLS(currentUserKeyCreator('favorite'), []);
    setDataToLS(currentUserKeyCreator('history'), []);

    dispatch(
      createFavorite(
        getDataFromLS(currentUserKeyCreator('favorite') || [])
      )
    )
    dispatch(
      createFavorite(
        getDataFromLS(currentUserKeyCreator('history') || []),
      ),
    );


  };
  return (
    <div className="form">
      <RegForm registration={registration} />
    </div>
  );
}
