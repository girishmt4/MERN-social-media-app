import Comment from "../models/Comment.js";
import jwt from "jsonwebtoken";

export const getComments = async (req, res) => {

    const comments = await Comment.find({ "postId": req.query.postId }).sort({ "createdAt": -1 }).populate("userId", { name: 1, profilePic: 1 });

    return res.status(200).json(comments);

};

export const createComment = async (req, res) => {
    const token = req.cookies.accessToken;
    if (!token) {
        return res.status(401).json("You are not logged in");
    }

    jwt.verify(token, process.env.JWT_SECRET, async (err, userInfo) => {
        if (err) return res.status(403).json("invalid token");

        const newComment = new Comment({ ...req.body, userId: userInfo.id });
        console.log(newComment);

        try {
            const savedComment = await newComment.save();
            res.status(200).json(savedComment);
        } catch (err) {
            res.status(500).json(err);
        }
    })
};