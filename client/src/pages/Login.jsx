import { Link } from 'react-router-dom';

function Login() {
  return (
    <div>
      <h1>Login page</h1>
      <Link to='/register'>Register</Link>
    </div>
  );
}

export default Login;
