import { useAuth0 } from '@auth0/auth0-react';
import { useEffect } from 'react';
import Loader from './components/Loader';
import { Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import { configureInterceptors } from './api';
import { SocketProvider } from './contexts/socket-context';

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
          <Route element={<Dashboard />} index path='/' />
          <Route element={<Navigate to='/' />} path='*' />
        </Routes>
      </SocketProvider>
    </div>
  );
}

export default App;
