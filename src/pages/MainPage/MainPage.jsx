import { useGetFilmsQuery } from '../../store/Api/films';

import { ErrorBoundaries } from '../../components/ErrorBoundary/ErrorBoundary';
import { Search } from '../../components/Search/Search';
import { Spinner } from '../../components/Spinner/Spinner'
import { FilmItem } from '../../components/FilmItem/FilmItem'

import './MainPage.scss'

export default function MainPage() {
  const {data = [], isLoading, error} = useGetFilmsQuery();
  if (error){
     return(<div>Some Error</div>)
  }
  return (
    <ErrorBoundaries>
      <Search />
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="mainPage">
          {data &&
            data.docs.map((item) => (
              <FilmItem key={item.id} itemId={item.id} />
            ))}
        </div>
      )}
    </ErrorBoundaries>
  );
}
