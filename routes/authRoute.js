import express from 'express';
import { login, logout, register } from '../controllers/authController.js';
import {
  validateRegisterInput,
  validateLoginInput,
} from '../middleware/validationMiddleware.js';

const Router = express.Router();

Router.post('/register', validateRegisterInput, register);
Router.post('/login', validateLoginInput, login);
Router.get('/logout', logout);

export default Router;
