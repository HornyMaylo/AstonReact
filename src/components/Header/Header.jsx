import './Header.scss'

export function Header() {
   return (
     <header className="header">
       <div className="container">
         <div className="header__wrapper">
           <div className="header__item header__home">
             <button>Home</button>
           </div>
           <div className=" header__item header__authUserBtns">
             <button>Favorite</button>
             <button>History</button>
           </div>
           <div className="header__item header__exit">
             <button>Registration</button>
             <button>Sign in</button>
             <button>Exit</button>
           </div>
         </div>
       </div>
     </header>
   );


}
