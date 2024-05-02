import userModel from "../models/userModel.js";
import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import validator from 'validator';

// login user

const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.json({ success: false, message: "User Doesn't Exist" });
        }

        const hashedPassword = hashPassword(password);
        if (user.password !== hashedPassword) {
            return res.json({ success: false, message: "Invalid credentials" });
        }

        const token = createToken(user._id);
        res.json({ success: true, token });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
}

const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET);
}

const hashPassword = (password) => {
    return crypto.createHash('sha256').update(password).digest('hex');
}

// register user

const registerUser = async (req, res) => {
    const { name, password, email } = req.body;

    try {
        // checking if user already exists
        const exist = await userModel.findOne({ email });
        if (exist) {
            return res.json({
                success: false,
                message: "User already exists"
            });
        }

        // validation email format and strong password

        if (!validator.isEmail(email)) {
            return res.json({
                success: false, message: "Please enter a valid email"
            });
        }
        if (password.length < 8) {
            return res.json({
                success: false,
                message: "Please enter a strong password"
            });
        }

        // hashing user password
        const hashedPassword = hashPassword(password);

        const newUser = new userModel({
            name: name,
            email: email,
            password: hashedPassword,
        });

        const user = await newUser.save();
        const token = createToken(user._id);
        res.json({ success: true, token });

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: "Error" });

    }
}

export { loginUser, registerUser };
