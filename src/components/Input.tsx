import { InputHTMLAttributes } from 'react';

interface Props {
  error?: string | false;
}

export default function Input({
  type = 'text',
  error,
  ...props
}: InputHTMLAttributes<HTMLInputElement> & Props) {
  return (
    <div>
      <input className='block w-full p-2' type={type} {...props} />
      {error && <div className='text-xs text-red-500'>{error}</div>}
    </div>
  );
}
