import * as dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import morgan from 'morgan';
import { nanoid } from 'nanoid';

let jobs = [
  { id: nanoid(), company: 'apple', position: 'software engineer' },
  { id: nanoid(), company: 'google', position: 'product manager' },
  { id: nanoid(), company: 'facebook', position: 'data scientist' },
];

const app = express();

app.use(express.json());

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.get('/api/v1/jobs', (req, res) => {
  return res.status(200).json({
    status: 'success',
    data: jobs,
  });
});

app.post('/api/v1/jobs', (req, res) => {
  const { company, position } = req.body;
  if (!company || !position) {
    return res.status(400).json({
      status: 'error',
      message: 'Please provide company and position',
    });
  }

  const job = { id: nanoid(), company, position };
  jobs.push(job);
  res.status(201).json({
    status: 'success',
    data: job,
  });
});

app.get('/api/v1/jobs/:id', (req, res) => {
  const { id } = req.params;
  const job = jobs.find((job) => job.id === id);
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
});

app.patch('/api/v1/jobs/:id', (req, res) => {
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
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}...`);
});
