import { FilmItem } from '../FilmItem/FilmItem';
import './FilmsListWrapper.scss';

export function FilmsListWrapper() {
  return (
    <section className="filmslist">
      <FilmItem />
      <FilmItem />
      <FilmItem />
      <FilmItem />
    </section>
  );
}
