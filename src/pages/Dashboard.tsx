import { useState, useEffect } from 'react';
import Input from '../components/Input';
import { IoPaperPlane } from 'react-icons/all';
import { useSocket } from '../hooks/useSocket';
import Button from '../components/Button';
import { useAuth0 } from '@auth0/auth0-react';
import { getUsers } from '../api';

export default function Dashboard() {
  const { logout } = useAuth0();
  const { sendMessage } = useSocket();
  const [message, setMessage] = useState('');

  useEffect(() => {
    getUsers().then((res) => {
      console.log(res);
    });
  }, []);

  return (
    <div className='grid h-screen grid-cols-5'>
      <div className='bg-blue-50 p-5'>left</div>
      <div className='col-span-4 flex flex-col bg-blue-100 p-5'>
        <div className='flex-grow'>messages with selected person</div>
        <div className='flex w-full items-center gap-3'>
          <div className='flex-grow'>
            <Input
              placeholder='type your message here'
              className='rounded-md'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button
            className='flex h-10 w-10 items-center justify-center rounded-md bg-blue-500 transition-all hover:bg-blue-600'
            onClick={() => {
              sendMessage(message);
              setMessage('');
            }}
          >
            <IoPaperPlane className='h-6 w-6 text-white' />
          </button>
        </div>
      </div>
      <Button
        onClick={() => logout()}
        data-testid='logout-btn'
        className='fixed right-5 top-5'
      >
        Logout
      </Button>
    </div>
  );
}
