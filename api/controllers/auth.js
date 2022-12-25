import User from '../models/User.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';



export const registerUser = async (req, res) => {
    //check user if exists
    try {
        const usernameExists = await User.find({ $or: [{ username: req.body.username }, { email: req.body.email }] });
        if (usernameExists.length) {
            res.status(409).json("user already exists")
        } else {
            //hash the password
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(req.body.password, salt);

            // create new user
            const newUser = new User({
                username: req.body.username,
                email: req.body.email,
                password: hashedPassword,
                name: req.body.name
            });

            //save user and respond
            const user = await newUser.save();
            res.status(200).json(user);
        }
    } catch (err) {
        res.status(500).json(err);
    }
}

//Verify Token
export const verifyLogin = async (req, res) => {

    const token = req.cookies.accessToken;
    if (!token) {
        return res.status(401).json("You are not logged in");
    }

    jwt.verify(token, process.env.JWT_SECRET, async (err, userInfo) => {
        const currentUser = await User.findOne({ _id: userInfo.id })
        const { password, ...otherData } = currentUser;
        return res.status(200).json(otherData);
    })

}


// //LOGIN
export const loginUser = async (req, res) => {

    try {
        const user = await User.findOne({ username: req.body.username });
        if (user === null) {
            return res.status(404).json("user not found");
        }

        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if (!validPassword) {
            return res.status(404).json("password incorrect");
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
        const { password, ...otherData } = user;
        await res.cookie('accessToken', token, { httpOnly: true }).status(200).json(otherData);

    } catch (err) {
        res.status(500).json(err)
    }
}

export const logoutUser = (req, res) => {
    res.clearCookie('accessToken', {
        secure: true,
        sameSite: 'none'
    }).status(200).json('Logged Out!!')
}

