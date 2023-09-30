import { useContext } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { useGetFilmByNameQuery } from '../../store/Api/films';
import { AuthContext } from '../../store/authObserver';
import { addToHistory } from '../../store/slices/historyReducer';
import { useDebounce } from '../../hooks/useDebounce';

import './Search.scss';

export function Search() {
  const { authApi } = useContext(AuthContext);
  const dispatch = useDispatch();
  const [showDropDown, setShowDropDown] = useState(false);
  const [query, setQuery] = useState('');
  const debounce = useDebounce(query);
  const navigate = useNavigate();

  const { data = [] } = useGetFilmByNameQuery(debounce, {
    skip: debounce.length < 2,
  });

  const goSearch = () => {
    if (authApi[0]) {
      dispatch(addToHistory(query));
    }
    navigate(`/search/${query}`);
  };

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
