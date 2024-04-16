import { StatusCodes } from 'http-status-codes';

const errorHandlerMiddleware = (err, req, res, next) => {
  console.log(err);
  const statusCode = err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;
  const msg = err.message || 'something went wrong, try again later';

  return res.status(statusCode).json({
    status: 'error',
    message: msg,
  });
};

export default errorHandlerMiddleware;
