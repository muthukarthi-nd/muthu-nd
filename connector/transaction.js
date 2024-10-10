const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    accno: Number,
    type: Number, 
    amount: Number,
    date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Transaction', transactionSchema);
