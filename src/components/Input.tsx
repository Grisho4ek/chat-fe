import { InputHTMLAttributes } from 'react';

interface Props {
  error?: string | false;
  className?: string;
}

export default function Input({
  type = 'text',
  error,
  className = '',
  ...props
}: InputHTMLAttributes<HTMLInputElement> & Props) {
  return (
    <div>
      <input
        className={`block w-full p-2 ${className}`}
        type={type}
        {...props}
      />
      {error && <div className='text-xs text-red-500'>{error}</div>}
    </div>
  );
}
