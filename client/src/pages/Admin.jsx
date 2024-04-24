import { toast } from 'react-toastify';
import customFetch from '../utils/customFetch';
import { redirect, useLoaderData } from 'react-router-dom';
import Wrapper from '../assets/wrappers/StatsContainer';

export const loader = async () => {
  try {
    const { data } = await customFetch.get('/users/admin/app-stats');
    return data;
  } catch (error) {
    toast.error('You are not authorized to view this page');
    return redirect('/dashboard');
  }
};

function Admin() {
  const data = useLoaderData();

  return (
    <Wrapper>
      <h2>admin page</h2>
    </Wrapper>
  );
}

export default Admin;
