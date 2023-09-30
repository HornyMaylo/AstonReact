import { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../store/authObserver';
import {
  addToFavorite,
  removeFromFavorite,
} from '../../store/slices/favoriteReducer';

import currentUserKeyCreator from '../../utils/currentUserKeyCreator';
import getDataFromLS from '../../utils/getDataFromLS';

import './FavoriteButton.scss';

export function FavoriteButton({ id }) {
  const { authApi } = useContext(AuthContext);
  const dispatch = useDispatch();
  const favoritesFilms = useSelector((state) => state.favorites.favorites);
  // const favoritesFilms = getDataFromLS(currentUserKeyCreator('favorite')) || [];
  const checkFilm = favoritesFilms.includes(id);

  const navigate = useNavigate();

  const deleteFilmFromFav = (filmId) => {
    dispatch(removeFromFavorite(filmId));
  };

  const addFilmToFav = (filmId) => {
    if (authApi[0]) {
      dispatch(addToFavorite(filmId));
    } else {
      navigate('/signin');
    }
  };

  if (checkFilm && authApi[0]) {
    return (
      <button
        className="favorite__delete"
        onClick={() => deleteFilmFromFav(id)}
      >
        Delete
      </button>
    );
  }
  return (
    <button className="favorite__add" onClick={() => addFilmToFav(id)}>
      Add
    </button>
  );
}
