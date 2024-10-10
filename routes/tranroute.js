const express = require('express');
const router = express.Router();
const transController = require('../controller/transaction');

router.get('/user/by-accno', transController.getUserByAccno);
router.get('/user/by-username', transController.getUserByUsername);

module.exports = router;
