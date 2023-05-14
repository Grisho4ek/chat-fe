import { useAuth0 } from '@auth0/auth0-react';
import Button from './Button';
import { PropsWithChildren } from 'react';

interface Props {
  to?: string;
}

export default function Layout({ children, to }: PropsWithChildren<Props>) {
  const { logout } = useAuth0();
  return (
    <div className='flex min-h-screen flex-col'>
      <div className='flex justify-between bg-blue-200 px-6 py-2'>
        <div>{to && <div></div>}</div>
        <Button onClick={() => logout()} data-testid='logout-btn'>
          Logout
        </Button>
      </div>
      {children}
    </div>
  );
}
