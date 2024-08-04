import HttpCodes from 'http-status-codes';
import TareaModel from '../../../models/tareaSchema.js';

export class PutController{
    static async putTareas(req,res){
        const{
            body,
            params:{id},
        }=req;
        try{
            const action = await TareaModel.updateOne()
        }catch(e){
            console.error(e);
            res.status(HttpCodes.INTERNAL_SERVER_ERROR).json({
                data:null,
                message:'Ocurrió un error actualizando la tarea'
            })
        }
        
    }
}