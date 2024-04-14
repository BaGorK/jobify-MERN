import * as dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import morgan from 'morgan';

const app = express();

app.use(express.json());

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.get('/', (req, res) => {
  return res.status(200).send('hello from the server side...');
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
