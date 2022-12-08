// const mongoose = require('mongoose');
import mongoose from 'mongoose';

const LikeSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    postId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
    }
});

export default mongoose.model('Like', LikeSchema);