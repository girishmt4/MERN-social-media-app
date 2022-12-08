// const mongoose = require('mongoose');
import mongoose from 'mongoose';

const RelationshipSchema = mongoose.Schema({
    followerUserId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    followedUserId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

export default mongoose.model('Relationship', RelationshipSchema);