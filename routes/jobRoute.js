import express from 'express';

import {
  createJob,
  deleteJob,
  getAllJobs,
  getJob,
  updateJob,
} from '../controllers/jobController.js';

const Router = express.Router();

Router.route('/').get(getAllJobs).post(createJob);

Router.route('/:id').get(getJob).patch(updateJob).delete(deleteJob);

export default Router;
