import express from 'express';
import {tareaRouter} from './routers/tareaRouter.js';

export const mainRouter = express.Router();

mainRouter.use('/tareas', tareaRouter);

