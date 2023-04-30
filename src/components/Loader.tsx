import './Loader.css';

export default function Loader() {
  return (
    <div className='Loader fixed flex h-full w-full'>
      <div className='lds-roller m-auto'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
