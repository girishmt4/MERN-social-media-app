import express from 'express';
import { loginUser, logoutUser, registerUser } from '../controllers/auth.js';
const router = express();

router.get('/', (req, res) => {
    res.send('this is auth route');
});

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/logout', logoutUser);

export default router;
