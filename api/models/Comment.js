// const mongoose = require('mongoose');
import mongoose from 'mongoose';

const CommentSchema = mongoose.Schema({
    desc: {
        type: String,
        required: true,
        max: 200
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    postId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post',
        required: true
    },
});

export default mongoose.model("Comment", CommentSchema);