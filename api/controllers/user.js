import User from "../models/User.js";

export const getUser = async (req, res) => {

    const userId = req.params.id;
    try {
        const userData = await User.findById(userId);
        const { password, ...otherData } = userData._doc;
        return res.status(200).json(otherData);
    } catch (err) {
        return res.status(500).json(err)
    }


};



// const router = require('express').Router();
// const bcrypt = require('bcrypt');
// const User = require('../models/User');



// //update user
// router.put('/:id', async (req, res) => {
//     if (req.body.userId === req.params.id || req.user.isAdmin) {
//         if (req.body.password) {
//             try {
//                 const salt = await bcrypt.genSalt(10);
//                 req.body.password = await bcrypt.hash(req.body.password, salt);
//             } catch (err) {
//                 return res.status(500).json(err);
//             }
//         }
//         try {
//             const user = await User.findByIdAndUpdate(req.params.id, { $set: req.body });
//             res.status(200).json("Account Updated")
//         } catch (err) {
//             return res.status(500).json(err);

//         }
//     } else {
//         return res.status(403).json("Not your account");
//     }
// });

// //delete
// router.delete('/:id', async (req, res) => {
//     if (req.body.userId === req.params.id || req.body.isAdmin) {
//         try {
//             const user = await User.findByIdAndDelete(req.params.id);
//             res.status(200).json("Account Deleted ")
//         } catch (err) {
//             return res.status(500).json(err);

//         }
//     } else {
//         return res.status(403).json("Not your account");
//     }
// });



//follow a user
export const followUser = async (req, res) => {
    if (req.body.userId !== req.params.id) {
        try {
            const user = await User.findById(req.params.id);
            const currentUser = await User.findById(req.body.userId);
            if (!user.followers.includes(req.body.userId)) {
                await user.updateOne({ $push: { followers: req.body.userId } });
                await currentUser.updateOne({ $push: { following: req.params.id } });

                res.status(200).json("Now Following this user")
            }
            else {
                res.status(403).json("Allready a follower");
            }
        } catch (err) {
            res.status(500).json(err)
            console.log(err);
        }
    } else {
        res.status(403).json("cant follow yourself");
    }
}

// //unfollow a user
// router.put('/:id/unfollow', async (req, res) => {
//     if (req.body.userId !== req.params.id) {
//         try {
//             const user = await User.findById(req.params.id);
//             const currentUser = await User.findById(req.body.userId);
//             if (user.followers.includes(req.body.userId)) {
//                 await user.updateOne({ $pull: { followers: req.body.userId } });
//                 await currentUser.updateOne({ $pull: { following: req.params.id } });

//                 res.status(200).json("Now Unfollowing this user")
//             }
//             else {
//                 res.status(403).json("Allready an unfollower");
//             }
//         } catch (err) {
//             res.status(500).json(err)
//         }
//     } else {
//         res.status(403).json("cant unfollow yourself");
//     }
// })
