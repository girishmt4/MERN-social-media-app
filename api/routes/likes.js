import express from 'express';
const router = express();

router.get('/', (req, res) => {
    res.send('this is like route')
});

export default router;