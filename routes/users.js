var express = require('express');
var router = express.Router();
var {controller} =require('../controller/usercontroller');


router.post('/', controller);

module.exports = router;
