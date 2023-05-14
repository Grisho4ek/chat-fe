import { getUsers } from '../api';
import Chat from '../components/Chat';
import { useQuery } from 'react-query';
import Loader from '../components/Loader';
import Layout from '../components/Layout';

export default function Home() {
  const users = useQuery('users', getUsers);

  if (users.isLoading) return <Loader />;

  return (
    <Layout>
      <div className='grid flex-grow grid-cols-5'>
        <div className='bg-blue-50 p-5'>left</div>
        <Chat className='col-span-4' />
      </div>
    </Layout>
  );
}
