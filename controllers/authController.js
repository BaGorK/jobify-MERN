import { StatusCodes } from 'http-status-codes';
import User from '../models/userModel.js';

export const register = async (req, res) => {
  const isFirstAccount = (await User.countDocuments()) === 0;
  const role = isFirstAccount ? 'admin' : 'user';

  const user = await User.create({ ...req.body, role });

  res.status(StatusCodes.CREATED).json({ user });
};

export const login = async (req, res) => {
  res.send('login');
};
