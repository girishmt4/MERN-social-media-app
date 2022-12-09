import express from 'express';
import { createComment, getComments } from '../controllers/comment.js';
const router = express();

router.get('/', getComments);
router.post('/', createComment);

export default router;