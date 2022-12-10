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
        ref: 'User',
        default: []
    }],
    following: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        default: []
    }],
    city: {
        type: String,
        max: 50,
        default: ""
    },
    state: {
        type: String,
        max: 50,
        default: ""
    },
    country: {
        type: String,
        max: 50,
        default: ""
    },
    website: {
        type: String,
        max: 50,
        default: ""
    }
},
    { timestamps: true }
);

export default mongoose.model('User', UserSchema);
// module.exports = 