import { useDispatch, useSelector } from 'react-redux';

import { FilmItem } from '../../components/FilmItem/FilmItem';
import { resetFavorites } from '../../store/slices/favoriteReducer';

import currentUserKeyCreator from '../../utils/currentUserKeyCreator';
import getDataFromLS from '../../utils/getDataFromLS';

import './FavoritesPage.scss';
export default function FavoritesPage() {
  const dispatch = useDispatch();
  const favoritesFilms = useSelector((state) => state.favorites.favorites);

  // const favoritesFilms = getDataFromLS(currentUserKeyCreator('favorite')) || [];
  if (favoritesFilms.length > 0) {
    return (
      <>
        <button onClick={() => dispatch(resetFavorites())}>
          Reset Favorites
        </button>
        <div className="favoritesPage">
          {favoritesFilms.map((id) => (
            <FilmItem key={id} itemId={id} />
          ))}
        </div>
      </>
    );
  }
  return (
    <div className="favoritesPage">
      <div className="placeHolder">Favorites is clear now</div>
    </div>
  );
}
