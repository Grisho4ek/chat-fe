import { useAuth0 } from '@auth0/auth0-react';
import { useEffect, useState } from 'react';
import Loader from './components/Loader';
import { Routes, Route, RouteProps, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Dashboard from './pages/Dashboard';
import { configureInterceptors, getMe } from './api';

const publicRoutes: (RouteProps & {
  redirectTo?: string;
})[] = [
  {
    element: <Home />,
    path: '/',
  },

  {
    path: '*',
    redirectTo: '/',
  },
];
const authedRoutes: (RouteProps & {
  redirectTo?: string;
})[] = [
  {
    element: <Dashboard />,
    path: '/',
  },
  {
    path: '*',
    redirectTo: '/',
  },
];

function App() {
  const [isGettingUser, setIsGettingUser] = useState(false);

  const {
    isAuthenticated,
    isLoading,
    getAccessTokenSilently,
    getIdTokenClaims,
  } = useAuth0();

  useEffect(() => {
    configureInterceptors(getAccessTokenSilently);
  }, [getAccessTokenSilently]);

  useEffect(() => {
    if (isAuthenticated) {
      (async () => {
        setIsGettingUser(true);
        const claims = await getIdTokenClaims();
        getMe(claims!)
          .then(() => {
            setIsGettingUser(false);
          })
          .catch(() => {
            setIsGettingUser(false);
          });
      })();
    }
    // eslint-disable-next-line
  }, [isAuthenticated]);

  if (isLoading || isGettingUser) {
    return (
      <div className='flex min-h-screen flex-col items-center justify-center bg-slate-300'>
        <Loader />
      </div>
    );
  }

  return (
    <div className='min-h-screen bg-slate-300'>
      <Routes>
        {(isAuthenticated ? authedRoutes : publicRoutes).map(
          ({ redirectTo, path, ...rest }) => {
            if (redirectTo) {
              return (
                <Route
                  path={path}
                  element={<Navigate to={redirectTo} replace />}
                  key={redirectTo}
                />
              );
            }
            return <Route {...rest} key={path} path={path} />;
          }
        )}
      </Routes>
    </div>
  );
}

export default App;
