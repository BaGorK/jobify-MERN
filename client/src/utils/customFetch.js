import axios from 'axios';

const customFetch = axios.create({
  baseURL: '/api/v1',
});

export default customFetch;

// const response = await customFetch.get('/jobs/stats');
