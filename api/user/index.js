const express = require('express');
const controller = require('./user.controller');
const validator = require('./user.validator');

const router = express.Router();

router.post('/signup', validator.signup, controller.create);
router.post('/login', validator.login, controller.login);
router.patch('/available', validator.availability, controller.available);
router.patch('/unavailable', controller.unavailable);

// router.get('/login', controller.login)
// router.get('/', /* auth.isAdmin() ,*/ controller.getAll);

module.exports = router;
