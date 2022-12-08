// const mongoose = require('mongoose');
import mongoose from 'mongoose';

const StorySchema = mongoose.Schema({
    img: {
        type: String,
        required: true,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
},
    {
        timestamps: true
    });

export default mongoose.model("Story", StorySchema);