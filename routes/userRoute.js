import express from 'express';
import {
  getApplicationStats,
  getCurrentUser,
  updateUser,
} from '../controllers/userController.js';
import { validateUpdateUserInput } from '../middleware/validationMiddleware.js';
import {
  authorizePermissions,
  checkForGuestUser,
} from '../middleware/authMiddleware.js';
import upload from '../middleware/multerMiddleware.js';

const Router = express.Router();

Router.get('/current-user', getCurrentUser);
Router.get('/admin/app-stats', [
  authorizePermissions('admin'),
  getApplicationStats,
]);

Router.patch(
  '/update-user',
  checkForGuestUser,
  upload.single('avatar'),
  validateUpdateUserInput,
  updateUser
);

export default Router;
