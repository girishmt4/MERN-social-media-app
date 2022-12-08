import express from 'express';
import { getUser, followUser } from '../controllers/user.js';

const router = express.Router();

//get a user
router.get('/:id', getUser);

router.put('/:id/follow', followUser);

export default router;
