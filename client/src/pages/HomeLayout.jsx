import { Outlet } from 'react-router-dom';

function HomeLayout() {
  return (
    <div>
      <nav>navbar</nav>
      <Outlet />
    </div>
  );
}

export default HomeLayout;
