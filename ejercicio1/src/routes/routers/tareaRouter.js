import express from 'express';
import { Tareas } from '../../controllers/tareas/index.js';
import { validateBody } from '../../middlewares/validateBody.js';
import { post_put_tareaValidationSchema } from '../../helpers/validationSchemas/tareaValidationSchemas.js';

export const tareaRouter = express.Router();

tareaRouter.post('/', (req,res,next)=>validateBody(req,res,next,post_put_tareaValidationSchema), Tareas.PostController.postTareas);
tareaRouter.get('/', Tareas.GetController.getTareas);
tareaRouter.get('/:id', Tareas.GetController.getTarea);
tareaRouter.put('/:id', (req,res,next)=>validateBody(req,res,next,post_put_tareaValidationSchema),Tareas.PutController.putTareas);
tareaRouter.delete('/:id', Tareas.DeleteController.deleteTareas);