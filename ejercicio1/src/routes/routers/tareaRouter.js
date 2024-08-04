import express from 'express';
import { Tareas } from '../../controllers/tareas/index.js';

export const tareaRouter = express.Router();

tareaRouter.post('/', Tareas.PostController.postTareas);
tareaRouter.get('/', Tareas.GetController.getTareas);
tareaRouter.put('/:id', Tareas.PutController.putTareas);