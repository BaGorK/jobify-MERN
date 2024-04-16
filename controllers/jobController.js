import { StatusCodes } from 'http-status-codes';

import Job from '../models/jobModel.js';

import { nanoid } from 'nanoid';

let jobs = [
  { id: nanoid(), company: 'apple', position: 'software engineer' },
  { id: nanoid(), company: 'google', position: 'product manager' },
  { id: nanoid(), company: 'facebook', position: 'data scientist' },
];

export const getAllJobs = async (req, res) => {
  const jobs = await Job.find();

  return res.status(StatusCodes.OK).json({
    status: 'success',
    data: jobs,
  });
};

export const createJob = async (req, res) => {
  const { company, position } = req.body;
  const job = await Job.create({ company, position });

  res.status(StatusCodes.CREATED).json({
    status: 'success',
    msg: 'Job created',
    data: job,
  });
};

export const getJob = async (req, res) => {
  const { id } = req.params;
  const job = await Job.findById(id);

  if (!job) {
    return res.status(404).json({
      status: 'error',
      message: 'Job not found',
    });
  }

  return res.status(StatusCodes.OK).json({
    status: 'success',
    data: job,
  });
};

export const updateJob = async (req, res) => {
  const { id } = req.params;

  const updatedJob = await Job.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!updatedJob) {
    return res.status(404).json({
      status: 'error',
      message: 'Job not found',
    });
  }

  return res.status(StatusCodes.OK).json({
    status: 'success',
    msg: 'Job updated',
    data: updatedJob,
  });
};

export const deleteJob = async (req, res) => {
  const { id } = req.params;
  const job = Job.findByIdAndDelete(id);

  if (!job) {
    return res.status(404).json({
      status: 'error',
      message: 'Job not found',
    });
  }

  return res.status(StatusCodes.NO_CONTENT).json({
    status: 'success',
    msg: 'Job deleted',
    data: null,
  });
};
