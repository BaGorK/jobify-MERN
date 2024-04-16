import 'express-async-errors';
import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import morgan from 'morgan';
import mongoose from 'mongoose';

const app = express();
import jobRouter from './routes/jobRoute.js';

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

try {
  await mongoose.connect(process.env.DB_LOCAL);
  app.listen(PORT, () => {
    console.log(`DB CONNECTED... && Server is running on port ${PORT}...`);
  });
} catch (err) {
  console.log(err);
  process.exit(1);
}
