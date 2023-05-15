import { useAuth0 } from '@auth0/auth0-react';
import { useSocket } from '../hooks/useSocket';
import { useState } from 'react';
import Input from './Input';
import { IoPaperPlane } from 'react-icons/all';

interface Props {
  className?: string;
  to?: string;
}

export default function Chat({ className = '', to = 'all' }: Props) {
  const { user } = useAuth0();
  const { sendMessage, messages } = useSocket();
  const [message, setMessage] = useState('');

  return (
    <div className={`flex flex-col bg-blue-100 p-5 ${className}`}>
      <div className='flex-grow'>
        {messages.map((m) => (
          <div key={m.id}>{m.content}</div>
        ))}
      </div>
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
            sendMessage({ content: message, user_id: user!.sub!, to });
            setMessage('');
          }}
        >
          <IoPaperPlane className='h-6 w-6 text-white' />
        </button>
      </div>
    </div>
  );
}
