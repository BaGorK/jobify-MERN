import express from 'express';
import { login, register } from '../controllers/authController.js';
import {
  validateRegisterInput,
  validateLoginInput,
} from '../middleware/validationMiddleware.js';

const Router = express.Router();

Router.post('/register', validateRegisterInput, register);
Router.post('/login', validateLoginInput, login);

export default Router;
