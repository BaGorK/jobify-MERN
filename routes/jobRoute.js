import express from 'express';

import {
  createJob,
  deleteJob,
  getAllJobs,
  getJob,
  updateJob,
} from '../controllers/jobController.js';
import {
  validateJobInput,
  validateIdParam,
} from '../middleware/validationMiddleware.js';
import { checkForGuestUser } from '../middleware/authMiddleware.js';

const Router = express.Router();

Router.route('/')
  .get(getAllJobs)
  .post(checkForGuestUser, validateJobInput, createJob);

Router.route('/:id')
  .get(validateIdParam, getJob)
  .patch(checkForGuestUser, validateJobInput, validateIdParam, updateJob)
  .delete(checkForGuestUser, validateIdParam, deleteJob);

export default Router;
