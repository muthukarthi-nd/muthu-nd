const mongoose=require('mongoose');
require('dotenv').config();

const connectDB =async () =>{
    console.log('MongoDB URI:' ,process.env.MONGO_URI);
    try{
        await mongoose.connect(process.env.MONGO_URI|| 'mongodb://localhost:27017/bank' ,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
        });console.log('MongoDB Connected');

    }
    catch(error){
console.error('MongoDB connected error',error);
process.exit(1);
    }
};
module.exports =connectDB;