const express = require('express');
const User = require('../models/user');

const router = express.Router();


router.post('/actions', async (req, res) => {
    try {
        const userAction = new User(req.body);
        await userAction.save();
        res.status(201).send(userAction);
    } catch (error) {
        res.status(400).send(error);
    }
});


router.post('/actions', async (req, res) => {
    try {
        const actions = await User.find();
        res.status(201).send(actions);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;
