import cloudinary from 'cloudinary';

import { StatusCodes } from 'http-status-codes';
import User from '../models/userModel.js';
import Job from '../models/jobModel.js';
import { formatImage } from '../middleware/multerMiddleware.js';

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
  const newUser = { ...req.body };
  delete newUser.password;

  if (req.file) {
    const file = formatImage(req.file);

    const response = await cloudinary.v2.uploader.upload(file);

    newUser.avatar = response.secure_url;
    newUser.avatarPublicId = response.public_id;
  }

  const updatedUser = await User.findByIdAndUpdate(req.user.userId, newUser);

  if (req.file && updatedUser.avatarPublicId) {
    await cloudinary.v2.uploader.destroy(updatedUser.avatarPublicId);
  }

  return res.status(StatusCodes.OK).json({ msg: 'update user' });
};

export const getApplicationStats = async (req, res) => {
  const users = await User.countDocuments();
  const jobs = await Job.countDocuments();

  return res.status(StatusCodes.OK).json({ users, jobs });
};
