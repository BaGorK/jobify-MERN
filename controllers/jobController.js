import { StatusCodes } from 'http-status-codes';
import mongoose from 'mongoose';
import day from 'dayjs';
import Job from '../models/jobModel.js';

import { NotFoundError } from '../errors/customErrors.js';
import { nanoid } from 'nanoid';

let jobs = [
  { id: nanoid(), company: 'apple', position: 'software engineer' },
  { id: nanoid(), company: 'google', position: 'product manager' },
  { id: nanoid(), company: 'facebook', position: 'data scientist' },
];

export const getAllJobs = async (req, res) => {
  const jobs = await Job.find({ createdBy: req.user.userId });

  return res.status(StatusCodes.OK).json({
    status: 'success',
    result: jobs.length,
    jobs,
  });
};

export const createJob = async (req, res) => {
  req.body.createdBy = req.user.userId;

  const job = await Job.create(req.body);

  return res.status(StatusCodes.CREATED).json({
    status: 'success',
    msg: 'Job created',
    data: job,
  });
};

export const getJob = async (req, res) => {
  const { id } = req.params;
  const job = await Job.findById(id);

  return res.status(StatusCodes.OK).json({
    status: 'success',
    job,
  });
};

export const updateJob = async (req, res) => {
  const { id } = req.params;

  const updatedJob = await Job.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
  });

  return res.status(StatusCodes.OK).json({
    status: 'success',
    msg: 'Job updated',
    data: updatedJob,
  });
};

export const deleteJob = async (req, res) => {
  const { id } = req.params;
  await Job.findByIdAndDelete(id);

  return res.status(StatusCodes.OK).json({
    status: 'success',
    msg: 'Job deleted',
    data: null,
  });
};

export const showStats = async (req, res) => {
  let stats = await Job.aggregate([
    { $match: { createdBy: new mongoose.Types.ObjectId(req.user.userId) } },
    { $group: { _id: '$jobStatus', count: { $sum: 1 } } },
  ]);

  stats = stats.reduce((acc, cur) => {
    const { _id: title, count } = cur;
    acc[title] = count;

    return acc;
  }, {});

  console.log(stats);

  const defaultStats = {
    pending: stats?.pending || 0,
    interview: stats?.interview || 0,
    declined: stats?.declined || 0,
  };

  let monthlyApplications = [
    {
      date: 'May 23',
      count: 12,
    },
    {
      date: 'Jun 23',
      count: 9,
    },
    {
      date: 'Jul 23',
      count: 3,
    },
  ];

  res.status(StatusCodes.OK).json({ defaultStats, monthlyApplications });
};
