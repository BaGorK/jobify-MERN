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

app.post('/', (req, res) => {
  return res.status(200).json({
    status: 'success',
    data: req.body,
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}...`);
});
