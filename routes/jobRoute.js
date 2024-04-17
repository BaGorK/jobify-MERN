import express from 'express';

import {
  createJob,
  deleteJob,
  getAllJobs,
  getJob,
  updateJob,
} from '../controllers/jobController.js';
import { validateJobInput } from '../middleware/validationMiddleware.js';

const Router = express.Router();

Router.route('/').get(getAllJobs).post(validateJobInput, createJob);

Router.route('/:id')
  .get(getJob)
  .patch(validateJobInput, updateJob)
  .delete(deleteJob);

export default Router;
