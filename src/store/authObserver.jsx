import { useState, useMemo, createContext } from 'react';

const AuthContext = createContext();

function AuthObserver({children}) {
   const [isAuth, setIsAuth] = useState(
     localStorage.getItem('currentUser') === null
       ? false
       : !!JSON.parse(localStorage.getItem('currentUser')).name,
   );

   const changeAuth = () => {
      setIsAuth(!isAuth);
   }

   const authApi = useMemo(() => [isAuth, setIsAuth], [isAuth]);
   return(
      <AuthContext.Provider value={{authApi, changeAuth}}>
         {children}
      </AuthContext.Provider>
   )
}

export {AuthContext, AuthObserver}  