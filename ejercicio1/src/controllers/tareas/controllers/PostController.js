import HttpCodes from 'http-status-codes';
import TareaModel from '../../../models/tareaSchema.js';

export class PostController {
    static async postTareas(req,res){
        const {body}=req;
        const newTarea = new TareaModel({
            nombre:body.nombre,
        });
        try{
            await newTarea.save();
            res.status(HttpCodes.CREATED).json({
                data:null,
                message: 'Tarea guardada correctamente',
            })
        }catch(e){
            console.error(e);
            res.status(HttpCodes.INTERNAL_SERVER_ERROR).json({
                data: null,
                message: 'Ocurrió un error al guardar la tarea',
            })
        }
    }
}