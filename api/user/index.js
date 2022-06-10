import express from 'express';
import { create, login, available, unavailable } from './user.controller.js';

const router = express.Router();

router.post('/signup', create);
router.post('/login', login);
router.patch('/available', available);
router.patch('/unavailable', unavailable);
// router.get('/', /* auth.isAdmin() ,*/ getAll);

export default router;
