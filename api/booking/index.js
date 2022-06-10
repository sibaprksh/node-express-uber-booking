'use strict';

import express from 'express';
import { create as createController, tripEnd } from './booking.controller.js';
import { create as createValidator } from './booking.validator.js';

var router = express.Router();

router.post('/', createValidator, createController);
router.post('/tripEnd', tripEnd);

export default router;
