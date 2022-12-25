import express from 'express';
import { loginUser, logoutUser, registerUser, verifyLogin } from '../controllers/auth.js';
const router = express();

router.get('/', (req, res) => {
    res.send('this is auth route');
});

router.get('/verify', verifyLogin);
router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/logout', logoutUser);

export default router;
