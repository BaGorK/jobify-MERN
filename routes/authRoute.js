import express from 'express';
import { login, register } from '../controllers/authController.js';

const Router = express.Router();

Router.post('/register', register);
Router.post('/login', login);

export default Router;
