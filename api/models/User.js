// const mongoose = require('mongoose');
import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        min: 3,
        max: 50,
        unique: true
    },
    email: {
        type: String,
        required: true,
        max: 50,
        unique: true
    },
    password: {
        type: String,
        required: true,
        min: 6,
    },
    name: {
        type: String,
        required: true
    },
    profilePic: {
        type: String,
        default: ""
    },
    coverPic: {
        type: String,
        default: ""
    },
    followers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    following: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    city: {
        type: String,
        max: 50
    },
    website: {
        type: String,
        max: 50
    }
},
    { timestamps: true }
);

export default mongoose.model('User', UserSchema);
// module.exports = 