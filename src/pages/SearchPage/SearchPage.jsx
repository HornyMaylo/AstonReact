import { useParams } from 'react-router-dom';
import { useGetFilmByNameQuery } from '../../store/Api/films';

import { Spinner } from '../../components/Spinner/Spinner';
import { FilmItem } from '../../components/FilmItem/FilmItem';

import './SearchPage.scss';
export default function SearchPage() {
  const query = useParams().query;

  const { data, isLoading, error } = useGetFilmByNameQuery(query);

  if (error) {
    return <div>Error</div>;
  }

  if (isLoading) {
    return <Spinner />;
  }

  if (data.length > 0) {
    return (
      <div className="searchPage">
        {data &&
          data.map((item) => <FilmItem key={item.id} itemId={item.id} />)}
      </div>
    );
  }

  return (
    <div className="searchPage">
      <div className="placeHolder">По запросу «{query}» ничего не найдено</div>
    </div>
  );
}
