import { toast } from 'react-toastify';
import { JobsContainer, SearchContainer } from '../components';
import customFetch from '../utils/customFetch';
import { useLoaderData } from 'react-router-dom';

export const loader = async ({ request }) => {
  try {
    const { data } = await customFetch.get('/jobs');
    return {
      data,
    };
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

function AllJobs() {
  const { data } = useLoaderData();
  console.log(data);

  return (
    <>
      <SearchContainer />
      <JobsContainer />
    </>
  );
}

export default AllJobs;
