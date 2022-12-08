import Post from '../models/Post.js';
import User from '../models/User.js';
import jwt from 'jsonwebtoken';

export const getPosts = async (req, res) => {

    const token = req.cookies.accessToken;
    if (!token) {
        return res.status(401).json("Not Logged in");
    }

    jwt.verify(token, process.env.JWT_SECRET, async (err, userInfo) => {
        if (err) return res.status(403).json("invalid token");

        const currentUser = await User.findOne({ _id: userInfo.id }).populate('following', { name: 1, profilePic: 1 });
        const posts = await Post.find({ "userId": { $in: [...currentUser.following, userInfo.id] } }).sort({ createdAt: -1 })

        return res.status(200).json(posts);

    });

}

// //get timeline posts
// router.get('/timeline/all', async (req, res) => {
//     try {
//         const currentUser = await User.findById(req.body.userId);
//         const userPosts = await Post.find({ userId: currentUser._id });
//         const friendPosts = await Promise.all(
//             currentUser.following.map(friendId => {
//                 return Post.find({ userId: friendId });
//             })
//         );
//         res.json(userPosts.concat(...friendPosts));
//     } catch (err) {
//         res.status(500).json(err);
//     }
// })

// //get a post
// router.get('/:id', async (req, res) => {
//     try {
//         const post = await Post.findById(req.params.id);
//         res.status(200).json(post)
//     } catch (err) {
//         res.status(500).json(err);
//     }
// })

//create a post
export const createPost = async (req, res) => {
    const newPost = new Post(req.body);
    try {
        const savedPost = await newPost.save();
        res.status(200).json(savedPost)
    } catch (err) {
        res.status(500).json(err);
    }
}

// //update a post
// router.put('/:id', async (req, res) => {
//     try {
//         const post = await Post.findById(req.params.id);
//         if (post.userId === req.body.userId) {
//             await post.updateOne({ $set: req.body });
//             res.status(200).json("updated")
//         } else {
//             res.status(403).json("not your post");
//         }
//     } catch (err) {
//         res.status(500).json(err)
//     }
// })

// //delete a post
// router.delete('/:id', async (req, res) => {
//     try {
//         const post = await Post.findById(req.params.id);
//         if (post.userId === req.body.userId) {
//             await post.deleteOne();
//             res.status(200).json("deleted")
//         } else {
//             res.status(403).json("not your post to delete");
//         }
//     } catch (err) {
//         res.status(500).json(err)
//     }
// })

// //like a post
// router.put('/:id/like', async (req, res) => {
//     try {
//         const post = await Post.findById(req.params.id);
//         if (!post.likes.includes(req.body.userId)) {
//             await post.updateOne({ $push: { likes: req.body.userId } });
//             res.status(200).json("post liked")
//         } else {
//             await post.updateOne({ $pull: { likes: req.body.userId } });
//             res.status(200).json("post disliked")

//         }
//     } catch (err) {
//         res.status(500).json(err);
//     }
// })



