import 'express-async-errors';
import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import morgan from 'morgan';
import mongoose from 'mongoose';

const app = express();
import jobRouter from './routes/jobRoute.js';
import errorHandlerMiddleware from './middleware/errorHandlerMiddleware.js';
import { validateTest } from './middleware/validationMiddleware.js';

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());

app.post('/api/v1/test', validateTest, (req, res) => {
  const { name } = req.body;
  res.json({ msg: `hello ${name}` });
});

//  JOBS Router
app.use('/api/v1/jobs', jobRouter);

app.use('*', (req, res) => {
  return res.status(404).json({
    status: 'fail',
    message: 'not found',
  });
});

// GLOBAL ERROR HANDLER
app.use(errorHandlerMiddleware);

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
