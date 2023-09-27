import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AuthContext } from '../../store/authObserver';
import setDataToLS from '../../utils/setDataToLS';
import { removeUser } from '../../store/slices/userReducer';
import { REGISTER } from '../../urlPieces/urlPieces';
import { LOGIN } from '../../urlPieces/urlPieces';
import { FAVORITE } from '../../urlPieces/urlPieces';

import './Header.scss';

export function Header() {
  const dispatch = useDispatch();
  const { authApi } = useContext(AuthContext);
  const { changeAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const exit = () => {
    navigate('/');
    setDataToLS('currentUser', {});
    dispatch(removeUser());
    changeAuth();
  }

  if(authApi[0]) {
      return (
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__item header__home">
                <button onClick={() => navigate('/')}>Home</button>
              </div>
              <div className=" header__item header__authUserBtns">
                <button onClick={() => navigate(FAVORITE)}>Favorite</button>
                <button>History</button>
              </div>
              <div className="header__item header__exit">
                <button onClick={exit}>Exit</button>
              </div>
            </div>
          </div>
        </header>
      );
  }
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__item header__home">
            <button onClick={() => navigate('/')}>Home</button>
          </div>
          <div className="header__item header__exit">
            <button onClick={() => navigate(REGISTER)}>Registration</button>
            <button onClick={() => navigate(LOGIN)}>Sign in</button>
          </div>
        </div>
      </div>
    </header>
  );
}
