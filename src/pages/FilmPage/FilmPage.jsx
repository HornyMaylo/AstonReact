
import { useParams } from "react-router-dom";
import { useGetFilmByIdQuery } from "../../store/Api/films";

import { Spinner } from "../../components/Spinner/Spinner";
import { FavoriteButton } from "../../components/FavoriteButton/FavoriteButton";

import './FilmPage.scss'

export default function FilmPage() {
   const values = useParams();
   const filmId = +values.id;
   const { data = [], isLoading, error } = useGetFilmByIdQuery(filmId);

   if (isLoading) {
      return <Spinner animation="border" />;
   }

   if (error) {
      return 'error';
   }

   return (
      <div className="filmPage">
         <div className="filmPage__item">
         <img src={data.poster.url} alt={data.name} />
         </div>
         <div className="filmPage__item">
         <h1>{data.name}</h1>
         <div className="filmPage__description">
            <p>Год: {data.year}</p>
            <ul>
               {data.genres.map((item, id) => (
               <li key={id}>{item.name}</li>
               ))}
            </ul>
            <p>Описание: {data.shortDescription}</p>
            <p>Бюджет: {data.budget.value || 'Неизвестно'}</p>
            <FavoriteButton />
         </div>
         </div>
      </div>
   );
}