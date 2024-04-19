import { StatusCodes } from 'http-status-codes';
import User from '../models/userModel.js';
import Job from '../models/jobModel.js';

export const getCurrentUser = async (req, res) => {
  const user = await User.findById(req.user.userId);
  //TODO: instance methods run any way. why we call them?
  const userWithoutPassword = user.toJSON();

  return res.status(StatusCodes.OK).json({
    status: 'success',
    data: userWithoutPassword,
  });
};

export const getApplicationStats = async (req, res) => {
  return res.status(StatusCodes.OK).json({ msg: 'get application stats' });
};
export const updateUser = async (req, res) => {
  return res.status(StatusCodes.OK).json({ msg: 'update user' });
};
