'use strict';

var express = require('express');
var controller = require('./booking.controller');
var validator = require('./booking.validator');

var router = express.Router();

router.post('/', /*validator.create,*/ controller.create);

module.exports = router;