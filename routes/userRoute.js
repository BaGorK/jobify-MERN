import express from 'express';
import {
  getApplicationStats,
  getCurrentUser,
  updateUser,
} from '../controllers/userController.js';

const Router = express.Router();

Router.get('/current-user', getCurrentUser);
Router.patch('/update-user', updateUser);

Router.get('/admin/app-stats', getApplicationStats);

export default Router;
