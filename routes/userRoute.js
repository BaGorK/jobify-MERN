import express from 'express';
import {
  getApplicationStats,
  getCurrentUser,
  updateUser,
} from '../controllers/userController.js';
import { validateUpdateUserInput } from '../middleware/validationMiddleware.js';

const Router = express.Router();

Router.get('/current-user', getCurrentUser);
Router.patch('/update-user', validateUpdateUserInput, updateUser);

Router.get('/admin/app-stats', getApplicationStats);

export default Router;
