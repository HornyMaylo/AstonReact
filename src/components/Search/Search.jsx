import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {useGetFilmByNameQuery} from '../../store/Api/films'

import './Search.scss';

export function Search() {
   const [showDropDown, setShowDropDown] = useState(false);
   const [query, setQuery] = useState('');
   const navigate = useNavigate();

   const { data = [] } = useGetFilmByNameQuery(query, {
      skip: query.length < 2, 
   });

   const goSearch = () => {
      navigate(`/search/${query}`);
   }

  return (
    <div className="search">
      <div className="container">
        <div className="search__wrapper">
          <div className="search__input">
            <input
              type="text"
              placeholder="Films?"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onFocus={() => setShowDropDown(true)}
              onBlur={() => setTimeout(() => setShowDropDown(false), 1000)}
            />
            {query.length > 2 && data.length && showDropDown ? (
              <div className="dropDown">
                {data?.slice(0, 5).map((item) => (
                  <Link
                    key={item.id}
                    className="dropDown__item"
                    to={`/movie/${item.id}`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            ) : (
              ''
            )}
          </div>
          <button onClick={goSearch}>Search</button>
        </div>
      </div>
    </div>
  );
}
