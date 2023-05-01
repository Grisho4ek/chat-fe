import { useAuth0 } from '@auth0/auth0-react';
import { useEffect } from 'react';
import Loader from './components/Loader';
import { Routes, Route, RouteProps, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import { configureInterceptors } from './api';
import { SocketProvider } from './contexts/socket-context';

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
  const {
    isLoading,
    getAccessTokenSilently,
    isAuthenticated,
    loginWithRedirect,
  } = useAuth0();

  useEffect(() => {
    configureInterceptors(getAccessTokenSilently);
  }, [getAccessTokenSilently]);

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      (async () => {
        await loginWithRedirect();
      })();
    }
  }, [isLoading, isAuthenticated, loginWithRedirect]);

  if (isLoading || (!isLoading && !isAuthenticated)) {
    return (
      <div className='flex min-h-screen flex-col items-center justify-center bg-slate-300'>
        <Loader />
      </div>
    );
  }

  return (
    <div className='min-h-screen bg-slate-300'>
      <SocketProvider>
        <Routes>
          {authedRoutes.map(({ redirectTo, path, ...rest }) => {
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
          })}
        </Routes>
      </SocketProvider>
    </div>
  );
}

export default App;
