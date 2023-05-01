import { useAuth0 } from '@auth0/auth0-react';
import Button from './Button';

export default function Login() {
  const { loginWithRedirect, logout } = useAuth0();

  const onClickLogin = () => loginWithRedirect();

  return (
    <div className='space-x-5'>
      <Button onClick={() => onClickLogin()} data-testid='login-btn'>
        Login
      </Button>
      <Button onClick={() => logout()} data-testid='logout-btn'>
        logout
      </Button>
    </div>
  );
}
