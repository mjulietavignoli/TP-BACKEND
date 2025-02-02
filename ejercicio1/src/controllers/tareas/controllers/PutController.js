import HttpCodes from 'http-status-codes';
import TareaModel from '../../../models/tareaSchema.js';

export class PutController{
    static async putTareas(req,res){
        const{
            body,
            params:{id},
        }=req;
        try{
            const action = await TareaModel.updateOne({
                _id:id,
            }, body,);
            
            if(action.matchedCount === 0){
                res.status(HttpCodes.BAD_REQUEST).json({
                    data:null,
                    message:'La tarea no existe',
                });
                return;
            }
            res.json({
                data:null,
                message:'Tarea actualizada correctamente'
            });
        }catch(e){
            console.error(e);
            res.status(HttpCodes.INTERNAL_SERVER_ERROR).json({
                data:null,
                message:'Ocurrió un error actualizando la tarea'
            })
        }
        
    }
}