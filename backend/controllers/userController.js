const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const registerUser = async (req, res) => {
    const { username, password, confirmPassword } = req.body;
    try {
        if (!username || !password || !confirmPassword) {
            return res.status(400).json({ message: "All fields are required" });
        }
        const userExists = await User.findOne({ username });

        if (userExists) {
            return res.status(400).json({ message: "User already exists" });
        }

        if (password !== confirmPassword) {
            return res.status(400).json({ message: "Passwords do not match" });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const user = await User.create({
            username,
            password: hashedPassword,
        });

        res.status(201).json({
           id: user._id,
           username: user.username,
        });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
 };

 const loginUser = async (req, res) => {
    const { username, password } = req.body;
    try {
        if (!username || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }
 
 
        const user = await User.findOne({ username });
 
 
        if (!user) {
            return res.status(400).json({ message: "User doesn't exist" });
        }
 

        const isMatch = await bcrypt.compare(password, user.password);
 
 
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid password" });
        }
 
 
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
            expiresIn: "1d",
        });
 
 
        res.cookie("jwt", token, {
            httpOnly: false,
            expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
            sameSite: "none",
            secure: true,
        });
 
 
        res.status(200).json({
            id: user._id,
            message: "Logged in sucessful",
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
 };
 

 module.exports = {
    registerUser,
    loginUser,
 };
 