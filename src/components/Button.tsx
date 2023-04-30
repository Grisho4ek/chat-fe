import { PropsWithChildren, ButtonHTMLAttributes } from 'react';

export default function Button({
  children,
  ...rest
}: PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>) {
  return (
    <button
      className='rounded-md bg-white px-5 py-1 transition duration-300 hover:shadow-md'
      {...rest}
    >
      {children}
    </button>
  );
}
