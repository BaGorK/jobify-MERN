import 'express-async-errors';
import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import morgan from 'morgan';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';

const app = express();
import jobRouter from './routes/jobRoute.js';
import authRouter from './routes/authRoute.js';
import userRouter from './routes/userRoute.js';
import errorHandlerMiddleware from './middleware/errorHandlerMiddleware.js';
import { authenticateUser } from './middleware/authMiddleware.js';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.static(path.resolve(__dirname, './public')));
app.use(express.json());
app.use(cookieParser());

app.get('/api/v1/test', (req, res) => {
  res.json({ msg: 'test route' });
});

//  JOBS Router
app.use('/api/v1/jobs', authenticateUser, jobRouter);
app.use('/api/v1/users', authenticateUser, userRouter);
app.use('/api/v1/auth', authRouter);

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
