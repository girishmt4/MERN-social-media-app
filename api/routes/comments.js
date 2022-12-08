import express from 'express';
const router = express();

router.get('/', (req, res) => {
    res.send('this is comment route')
});

export default router;