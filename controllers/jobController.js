import Job from '../models/jobModel.js';

import { nanoid } from 'nanoid';

let jobs = [
  { id: nanoid(), company: 'apple', position: 'software engineer' },
  { id: nanoid(), company: 'google', position: 'product manager' },
  { id: nanoid(), company: 'facebook', position: 'data scientist' },
];

export const getAllJobs = async (req, res) => {
  const jobs = await Job.find();

  return res.status(200).json({
    status: 'success',
    data: jobs,
  });
};

export const createJob = async (req, res) => {
  const { company, position } = req.body;
  const job = await Job.create({ company, position });

  res.status(201).json({
    status: 'success',
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

  return res.status(200).json({
    status: 'success',
    data: job,
  });
};

export const updateJob = async (req, res) => {
  const { id } = req.params;
  const { company, position } = req.body;
  const job = jobs.find((job) => job.id === id);
  if (!job) {
    return res.status(404).json({
      status: 'error',
      message: 'Job not found',
    });
  }
  job.company = company || job.company;
  job.position = position || job.position;

  return res.status(200).json({
    status: 'success',
    data: job,
  });
};

export const deleteJob = async (req, res) => {
  const { id } = req.params;
  const job = jobs.find((job) => job.id === id);

  if (!job) {
    return res.status(404).json({
      status: 'error',
      message: 'Job not found',
    });
  }
  jobs = jobs.filter((job) => job.id !== id);

  return res.status(204).json({
    status: 'success',
    data: null,
  });
};
