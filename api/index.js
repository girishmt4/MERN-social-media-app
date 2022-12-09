import express from "express";
const app = express();
import mongoose from "mongoose";
import * as dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import userRoutes from './routes/users.js';
import authRoutes from './routes/auth.js';
import postRoutes from './routes/posts.js';
import likeRoutes from './routes/likes.js';
import commentRoutes from './routes/comments.js';
import multer from "multer";

dotenv.config();

// //middlesware
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Credentials', true);
    next();
});
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000'
}));


app.use(cookieParser());

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, '../client/public/upload')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + file.originalname);
    }
});

const upload = multer({ storage: storage });

app.post('/api/upload', upload.single('file'), (req, res) => {
    const file = req.file;
    res.status(200).json(file.filename);
})

app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/like', likeRoutes);
app.use('/api/comment', commentRoutes);

app.listen(8800, () => {
    console.log("Backend Server is running");
});

mongoose.connect(process.env.MONGO_URL, (err) => {
    if (err) console.log(err)
    else console.log("mongdb is connected");
});



// const helmet = require('helmet');
// const morgan = require('morgan');





