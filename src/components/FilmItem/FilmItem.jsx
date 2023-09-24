import peaky from '../../assets/peakyBlinders.jpg';
import {FavoriteButton} from '../FavoriteButton/FavoriteButton'
import './FilmItem.scss';

export function FilmItem() {
  return (
    <div className="filmItem">
      <div className="film__wrapper">
        <img src={peaky} alt="peakyBlinders" />
        <h3>Peaky blinders</h3>
        <FavoriteButton />
      </div>
    </div>
  );
}
