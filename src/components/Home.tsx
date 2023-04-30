import { useAuth0 } from '@auth0/auth0-react';
import Button from './Button';

export default function Home() {
  const { loginWithRedirect } = useAuth0();

  const onClickLogin = () => loginWithRedirect();

  return (
    <div>
      <Button onClick={onClickLogin} data-testid='login-btn'>
        Login
      </Button>
    </div>
  );
}
