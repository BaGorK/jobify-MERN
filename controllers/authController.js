import { StatusCodes } from 'http-status-codes';
import User from '../models/userModel.js';
import { hashPassword } from '../utils/passwordUtils.js';
import { UnauthenticatedError } from '../errors/customErrors.js';

export const register = async (req, res) => {
  const isFirstAccount = (await User.countDocuments()) === 0;
  const role = isFirstAccount ? 'admin' : 'user';

  const hashedPassword = await hashPassword(req.body.password);
  req.body.password = hashedPassword;

  const user = await User.create({ ...req.body, role });

  res.status(StatusCodes.CREATED).json({
    status: 'success',
    msg: 'user created',
  });
};

export const login = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) throw new UnauthenticatedError('Invalid credentials');
  res.send('login');
};
