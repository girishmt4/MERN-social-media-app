import User from "../models/User.js";
import jwt from "jsonwebtoken"
import bcrypt from 'bcrypt';
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

//follow a user
export const followUser = async (req, res) => {

    const token = req.cookies.accessToken;
    if (!token) return res.status(401).json("not logged in");

    jwt.verify(token, process.env.JWT_SECRET, async (err, userInfo) => {
        if (err) return res.status(403).json("invalid token");

        try {
            const userToFollowId = req.params.id
            const userToFollow = await User.findById(userToFollowId); //girish
            const currentUser = await User.findById(userInfo.id); //jane

            if (!userToFollow.followers.includes(userInfo.id)) {

                await userToFollow.updateOne({ $push: { followers: userInfo.id } });
                await currentUser.updateOne({ $push: { following: userToFollowId } });


                res.status(200).json("now following this user");
            } else {
                res.status(403).json("Allready a follower");
            }
        } catch (err) {
            console.log(err);
            res.status(500).json(err)
        }
    })
}

//follow a user
export const unfollowUser = async (req, res) => {

    const token = req.cookies.accessToken;
    if (!token) return res.status(401).json("not logged in");

    jwt.verify(token, process.env.JWT_SECRET, async (err, userInfo) => {
        if (err) return res.status(403).json("invalid token");

        try {
            const userToUnfollowId = req.params.id
            const userToUnfollow = await User.findById(userToUnfollowId); //girish
            const currentUser = await User.findById(userInfo.id); //jane

            if (userToUnfollow.followers.includes(userInfo.id)) {

                await userToUnfollow.updateOne({ $pull: { followers: userInfo.id } });
                await currentUser.updateOne({ $pull: { following: userToUnfollowId } });


                res.status(200).json("now unfollowing this user");
            } else {
                res.status(403).json("Not following in the first place");
            }
        } catch (err) {
            console.log(err);
            res.status(500).json(err)
        }
    })
}

export const updateUser = async (req, res) => {
    const token = req.cookies.accessToken;
    if (!token) return res.status(401).json("not logged in");

    jwt.verify(token, process.env.JWT_SECRET, async (err, userInfo) => {
        if (err) return res.status(403).json("invalid token");

        const thisProfileId = req.params.id;
        if (thisProfileId === userInfo.id) {
            if (req.body.password) {
                try {
                    const salt = await bcrypt.genSalt(10);
                    req.body.password = await bcrypt.hash(req.body.password, salt);
                } catch (err) {
                    return res.status(500).json(err);
                }
            }
            try {
                const user = await User.findByIdAndUpdate(req.params.id, { $set: req.body });
                res.status(200).json("Account Updated")
            } catch (err) {
                return res.status(500).json(err);
            }

        } else {
            return res.status(403).json("Not your account");
        }
    });
}

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

