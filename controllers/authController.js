import { StatusCodes } from 'http-status-codes';
import bcrypt from 'bcryptjs';
import User from '../models/userModel.js';

export const register = async (req, res) => {
  const isFirstAccount = (await User.countDocuments()) === 0;
  const role = isFirstAccount ? 'admin' : 'user';

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);
  req.body.password = hashedPassword;

  const user = await User.create({ ...req.body, role });

  res.status(StatusCodes.CREATED).json({
    status: 'success',
    msg: 'user created',
  });
};

export const login = async (req, res) => {
  res.send('login');
};
