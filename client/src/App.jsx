import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomeLayout from './pages/HomeLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
  },
  {
    path: '/about',
    element: <h1>about page</h1>,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
