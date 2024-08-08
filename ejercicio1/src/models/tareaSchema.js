import mongoose from 'mongoose';

const Tarea = new mongoose.Schema({
    nombre:{
        type:String,
        required:true,
    },
    isActive:{
        type:Boolean,
        default:true,
    }
});

export default mongoose.model('Tareas', Tarea);