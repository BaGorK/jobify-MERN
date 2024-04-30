import express from 'express';

import {
  createJob,
  deleteJob,
  getAllJobs,
  getJob,
  showStats,
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

Router.route('/stats').get(showStats);

Router.route('/:id')
  .get(validateIdParam, getJob)
  .patch(checkForGuestUser, validateJobInput, validateIdParam, updateJob)
  .delete(checkForGuestUser, validateIdParam, deleteJob);

export default Router;
