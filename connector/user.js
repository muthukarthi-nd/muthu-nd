var mongoose = require('mongoose')

var userSchema =new mongoose.Schema({
    type:Number,
    username:String,
    accno:Number,
    date:String,
    currentbalance:Number,
    transaction:String
})
module.exports =mongoose.model('user',userSchema);