import HttpCodes from 'http-status-codes';
import TareaModel from '../../../models/tareaSchema.js';

export class GetController{
    static async getTareas(_,res){
        try{
            const data = await TareaModel.find({
                isActive:true,
            });

            const filteredData = data.map((tarea)=>{
                return{
                    id:tarea._doc._id,
                    nombre:tarea._doc.nombre,
                }
            })
    
            res.json({
                data:filteredData,
                message:null,
            });
        }catch(e){
            console.error(e);
            res.status(HttpCodes.INTERNAL_SERVER_ERROR).json({
                data:null,
                message:'Ocurrió un error al leer la lista de tareas'
            })
        }
        
    }
    static async getTarea(req,res){
        const {params:{id}}=req;
        try{
            const data = await TareaModel.findOne({
                isActive:true,
                _id:id,
            });

            const formattedData = {
                id:data._doc._id,
                nombre:data._doc.nombre,
            }
    
            res.json({
                data:formattedData,
                message:'Tarea encontrada correctamente',
            });
        }catch(e){
            console.error(e);
            res.status(HttpCodes.INTERNAL_SERVER_ERROR).json({
                data:null,
                message:'Ocurrió un error al leer la lista de tareas'
            })
        }
        
    }

}