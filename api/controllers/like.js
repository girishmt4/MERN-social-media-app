import Like from "../models/Like.js";
import jwt from "jsonwebtoken";

export const getLikes = async (req, res) => {

    const likes = await Like.find({ "postId": req.query.postId }).populate('userId', { name: 1 });
    return res.status(200).json(likes.map(like => like.userId));
}

export const addLike = async (req, res) => {
    const token = req.cookies.accessToken;
    if (!token) return res.status(401).json("Not Logged in");
    jwt.verify(token, process.env.JWT_SECRET, async (err, userInfo) => {
        if (err) return res.status(403).json("invalid token");

        const newLike = new Like({ postId: req.body.postId, userId: userInfo.id });
        await newLike.save();

        res.status(200).json("Successfully Liked");
    })
}

export const deleteLike = async (req, res) => {
    const token = req.cookies.accessToken;
    if (!token) return res.status(401).json("Not Logged in");
    jwt.verify(token, process.env.JWT_SECRET, async (err, userInfo) => {
        if (err) return res.status(403).json("invalid token");

        await Like.findOneAndDelete({ userId: userInfo.id, postId: req.body.postId });

        res.status(200).json("Successfully Disliked");
    })
}