import { StatusCodes } from 'http-status-codes';
import User from '../models/userModel.js';
import Job from '../models/jobModel.js';

export const getCurrentUser = async (req, res) => {
  const user = await User.findById(req.user.userId);
  //TODO: instance methods run any way. why we call them?
  const userWithoutPassword = user.toJSON();

  return res.status(StatusCodes.OK).json({
    status: 'success',
    user: userWithoutPassword,
  });
};

export const updateUser = async (req, res) => {
  console.log(req.file);

  const obj = { ...req.body };
  delete obj.password;

  const updateUser = await User.findByIdAndUpdate(req.user.userId, obj, {
    new: true,
    runValidators: true,
  });

  return res.status(StatusCodes.OK).json({ msg: 'update user' });
};

export const getApplicationStats = async (req, res) => {
  const users = await User.countDocuments();
  const jobs = await Job.countDocuments();

  return res.status(StatusCodes.OK).json({ users, jobs });
};
