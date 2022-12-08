import express from 'express';
import { getUser } from '../controllers/user.js';

const router = express.Router();

//get a user
router.get('/:id', getUser);

export default router;
