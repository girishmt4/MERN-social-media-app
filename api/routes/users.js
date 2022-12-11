import express from 'express';
import { getUser, followUser, unfollowUser, updateUser } from '../controllers/user.js';

const router = express.Router();

//get a user
router.get('/:id', getUser);
router.put('/:id', updateUser);
router.put('/:id/follow', followUser);
router.delete('/:id/unfollow', unfollowUser);

export default router;
