// import styled from 'styled-components';
import Wrapper from '../assets/wrappers/LandingPage';
import main from '../assets/images/main.svg';
import logo from '../assets/images/logo.svg';
import { Link } from 'react-router-dom';

// const Wrapper = styled.div``;

function Landing() {
  return (
    <Wrapper>
      <nav>
        <img src={logo} alt='' />
      </nav>
      <div className='container page'>
        <div className='infor'>
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            recusandae vero quisquam quas quo placeat voluptatum porro
            consectetur quos molestias consequuntur aspernatur, necessitatibus
            laudantium facere. Rem, illo in? Voluptatibus, repellendus?
          </p>
          <Link to='/register' className='btn register-link'>
            Register
          </Link>
          <Link to='/login' className='btn'>
            Login / Demo User
          </Link>
        </div>
        <img src={main} alt='job hunt' className='img main-img' />
      </div>
    </Wrapper>
  );
}

export default Landing;
