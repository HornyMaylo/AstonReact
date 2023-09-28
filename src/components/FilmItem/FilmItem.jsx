import { Link } from 'react-router-dom';
import { FavoriteButton } from '../FavoriteButton/FavoriteButton';
import { Spinner } from '../Spinner/Spinner';

import { useGetFilmByIdQuery } from '../../store/Api/films';
import './FilmItem.scss';

import { MAIN } from '../../urlPieces/urlPieces';

export function FilmItem({ itemId }) {
  const { data = [], isLoading, error } = useGetFilmByIdQuery(itemId);

  if (isLoading) {
    return <Spinner />;
  } 
  if (error) {
    return <div>Some Error</div>;
  }
  return (
    <div className="filmItem">
      <div className="film__wrapper">
        <Link to={`${MAIN}movie/${itemId}`}>
          <img src={data.poster ? data.poster.url : '404'} alt={data.name} />
        </Link>
        <h3>{data.name}</h3>
        <FavoriteButton id={itemId} />
      </div>
    </div>
  );
}
