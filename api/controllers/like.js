import Like from "../models/Like.js";
import jwt from "jsonwebtoken";

export const getLikes = async (req, res) => {

    const likes = await Like.find({ "postId": req.query.postId }).populate('userId', { name: 1 });

    // console.log(likes[0]);
    return res.status(200).json(likes.map(like => like.userId));
}