/* eslint-disable react-refresh/only-export-components */
import { Form, Link } from 'react-router-dom';

import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import { FormRow, Logo } from '../components';

export const action = async (data) => {
  console.log(data);

  return null;
};

function Register() {
  return (
    <Wrapper>
      <Form method='POST' className='form'>
        <Logo />
        <h4>Register</h4>
        <FormRow
          type='text'
          name='name'
          labelText='first name'
          defaultValue='Edmealem'
        />
        <FormRow
          type='text'
          name='lastName'
          labelText='last name'
          defaultValue='K.'
        />
        <FormRow type='text' name='location' defaultValue='Bahir dar' />
        <FormRow type='email' name='email' defaultValue='test@test.com' />
        <FormRow type='password' name='password' defaultValue='test1234' />

        <button type='submit' className='btn btn-block'>
          submit
        </button>
        <p>
          Already a member?
          <Link to='/login' className='member-btn'>
            Login
          </Link>
        </p>
      </Form>
    </Wrapper>
  );
}

export default Register;
