const Transaction = require('../connector/transaction');
const User = require('../connector/user');
const { body, validationResult } = require('express-validator');

exports.getUserByAccno = [
    body('accno').isNumeric().withMessage('Account number must be numeric.'),
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            const { accno } = req.body;
            const user = await User.findOne({ accno });

            if (!user) {
                return res.status(404).json({ message: 'User not found.' });
            }

            const userTransactions = await Transaction.find({ accno });

            res.status(200).json({
                success: true,
                data: {
                    username: user.username,
                    accno: user.accno,
                    currentbalance: user.currentbalance,
                    type:user.type,
                    transactions: user,
                }
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal server error.' });
        }
    }
];

exports.getUserByUsername = [
    body('username').isString().withMessage('Username must be a string.'),
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            const { username } = req.body;
            const user = await User.findOne({ username });

            if (!user) {
                return res.status(404).json({ message: 'User not found.' });
            }

            res.status(200).json({
                success: true,
                data: {
                    username: user.username,
                    accno: user.accno,
                    currentbalance: user.currentbalance,
                }
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal server error.' });
        }
    }
];
