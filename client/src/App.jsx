import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <h1>home page</h1>,
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
