/* eslint-disable react/prop-types */
import { NavLink } from 'react-router-dom';
import links from '../utils/links';
import { useDashboardContext } from '../pages/DashboardLayout';

function NavLinks({ isBigSidebar }) {
  const { toggleSidebar, user } = useDashboardContext();

  return (
    <div className='nav-links'>
      {links.map((link) => {
        const { path, text, icon } = link;
        return (
          <NavLink
            to={path}
            key={text}
            className='nav-link'
            onClick={isBigSidebar ? null : toggleSidebar}
            end
          >
            <span className='icon'>{icon}</span>
            {text}
          </NavLink>
        );
      })}
    </div>
  );
}

export default NavLinks;
