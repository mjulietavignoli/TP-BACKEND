import mongoose from "mongoose";
const { MONGODB_URI } =process.env;
mongoose.set('strictQuery', true);
mongoose.connect(MONGODB_URI).then(()=>{
    console.log('Conectado a la base de datos');
}).catch((e)=>{
    console.error(e);
})