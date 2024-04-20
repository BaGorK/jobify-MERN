/* eslint-disable react-refresh/only-export-components */
import { Form, Link, redirect, useNavigation } from 'react-router-dom';

import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import { FormRow, Logo } from '../components';
import customFetch from '../utils/customFetch';
import { toast } from 'react-toastify';

export async function action({ request }) {
  const formData = await request.formData();

  const data = Object.fromEntries(formData);
  try {
    await customFetch.post('/auth/register', data);
    toast.success('Registration successful');
    return redirect('/login');
  } catch (error) {
    console.error(error);
    toast.error(error?.response?.data?.message || 'Registration fail');
    return error;
  }
}

function Register() {
  const navigation = useNavigation();

  const isSubmitting = navigation.state === 'submitting';

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

        <button type='submit' className='btn btn-block' disabled={isSubmitting}>
          {isSubmitting ? 'submitting...' : 'submit'}
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
