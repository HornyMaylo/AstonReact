import { useState, useMemo, createContext, memo } from 'react';

const AuthContext = createContext();
memo(AuthContext);

function AuthObserver({children}) {
   const [isAuth, setIsAuth] = useState(
     localStorage.getItem('currentUser') === null
       ? false
       : !!JSON.parse(localStorage.getItem('currentUser')).email,
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