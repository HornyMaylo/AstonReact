import currentUserKeyCreator from '../../utils/currentUserKeyCreator';

const favoriteMiddleware = (store) => (next) => (action) => {
  const { favorites } = store.getState().favorites;

  if (action.type === 'favorites/addToFavorite') {
    localStorage.setItem(
      currentUserKeyCreator('favorite'),
      JSON.stringify([...favorites, action.payload]),
    );
  }

  if (action.type === 'favorites/removeFromFavorite') {
    localStorage.setItem(
      currentUserKeyCreator('favorite'),
      JSON.stringify(favorites.filter((item) => item !== action.payload)),
    );
  }
  if (action.type === 'favorites/resetFavorites') {
    localStorage.setItem(currentUserKeyCreator('favorite'), JSON.stringify([]));
  }

  return next(action)
};

export default favoriteMiddleware;


