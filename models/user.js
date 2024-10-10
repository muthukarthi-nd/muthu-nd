const mongoose =require('mongoose');

const userSchema =new mongoose.Schema({
    action:{
        type:String,
        enum:['withdraw','deposit'],
        required:true,
    },
    data:{
        type:{
            type:String,
            require:true,
        },
        amount:{
            type:Number,
            required:true,
        },
        accno:{
            type:String,
            required:true
        }
        }
       
    });
module.exports = mongoose.model('user',userSchema);



