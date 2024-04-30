import {
  BadRequestError,
  UnauthenticatedError,
  UnauthorizedError,
} from '../errors/customErrors.js';
import { verifyJWT } from '../utils/tokenUtils.js';

export const authenticateUser = (req, res, next) => {
  const { token } = req.cookies;

  if (!token) throw new UnauthenticatedError('authentication invalid');

  try {
    const { userId, role } = verifyJWT(token);
    const guestUser = userId === '66303550af67aad0230dad15';
    req.user = { userId, role, guestUser };
    next();
  } catch (error) {
    throw new UnauthenticatedError('authentication invalid');
  }
};

export const authorizePermissions = (...roles) => {
  return (req, res, next) => {
    console.log('authorize', roles);
    if (!roles.includes(req.user.role)) {
      throw new UnauthorizedError('Unauthorized to access this route');
    }
    next();
  };
};

export const checkForGuestUser = (req, res, next) => {
  if (req.user.guestUser) {
    throw new BadRequestError('Guest User. Read Only!');
  }
  next();
};
