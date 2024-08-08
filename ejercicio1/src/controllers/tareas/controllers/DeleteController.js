import HttpCodes from 'http-status-codes';
import TareaModel from '../../../models/tareaSchema.js';

export class DeleteController{
    static async deleteTareas(req,res){
        const{
            params:{id},
        }=req;
        try{
            const action = await TareaModel.updateOne({
                _id:id,
                isActive: true,
            }, {
                isActive: false,
            },
            );
            
            if(action.matchedCount === 0){
                res.status(HttpCodes.BAD_REQUEST).json({
                    data:null,
                    message:'La tarea no existe',
                })
                return;
            }
            res.json({
                data:null,
                message:'Tarea eliminada correctamente'
            });
        }catch(e){
            console.error(e);
            res.status(HttpCodes.INTERNAL_SERVER_ERROR).json({
                data:null,
                message:'Ocurrió un error eliminando la tarea'
            })
        }
        
    }
}