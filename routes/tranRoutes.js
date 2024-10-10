const express = require('express');
const Data = require('../models/transaction');
const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const newData = new Data(req.body);
        await newData.save();
        res.status(201).json(newData);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.get('/', async (req, res) => {
    try {
        const allData = await Data.find();
        res.status(200).json(allData);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
