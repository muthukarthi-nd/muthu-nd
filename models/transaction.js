const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    action: {
        type: String,
        enum: ['username', 'accno'],
        required: true,
    },
    data: {
        username: {
            type: String,
            required: function() { return this.action === 'username'; },
        },
        accno: {
            type: String,
            required: function() { return this.action === 'accno'; },
        },
        date: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        currentBalance: {
            type: Number, 
            required: true,
        },
        transaction: {
            type: String,
            required: function() { return this.action === 'accno'; },
        }
    }
});

module.exports = mongoose.model('Transaction', transactionSchema);
