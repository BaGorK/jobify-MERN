import { Link, useRouteError } from 'react-router-dom';

function Error() {
  const error = useRouteError();

  console.log(error);

  return (
    <div>
      <h1>Error page</h1>
      <Link to='/'>back</Link>
    </div>
  );
}

export default Error;
