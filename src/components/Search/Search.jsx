import './Search.scss';

export function Search() {
  return (
   <div className="search">
      <div className="container">
         <div className="search__wrapper">
            <input type="text" placeholder='Films?'/>
            <button>Search</button>
         </div>
      </div>
   </div>
  );
}
