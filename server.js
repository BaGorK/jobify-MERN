import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import morgan from 'morgan';

import jobRouter from './routes/jobRoute.js';

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());

//  JOBS Router
app.use('/api/v1/jobs', jobRouter);

app.use('*', (req, res) => {
  return res.status(404).json({
    status: 'fail',
    message: 'not found',
  });
});

// GLOBAL ERROR HANDLER
app.use((err, req, res, next) => {
  console.log(err);
  return res.status(500).json({
    status: 'error',
    message: 'Something went wrong',
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}...`);
});
