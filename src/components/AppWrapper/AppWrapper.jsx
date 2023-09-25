import { useContext, Suspense} from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import {MAIN} from '../../urlPieces/urlPieces';
import { AuthContext } from '../../store/authObserver';
import { publicRoutes } from './componentGenerator';

export function AppWrapper() {
  const { authApi } = useContext(AuthContext)
  return (
    <Routes>
      {publicRoutes.map(({ path, Component }) => (
        <Route
          key={path}
          path={path}
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Component />
            </Suspense>
          }
        />
      ))}
      <Route path="*" element={<Navigate to={MAIN} />} />
    </Routes>
  );
}
