import emailValidator from "email-validator";
import bcrypt from "bcryptjs";

import User from "../models/userModel.js";
import { generateToken } from "../config/token.js";


// Register Controller
export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Validation
    if (!name || !email || !password) {
      return res.status(400).send("Please fill all the fields");
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).send({ message: "User already exists" });
    }

    // Validate email format
    if (!emailValidator.validate(email)) {
      return res.status(400).send({ message: "Please enter a valid email" });
    }

    // Validate password length
    if (password.length < 8) {
      return res
        .status(400)
        .send({ message: "Password must be at least 8 characters long" });
    }

    // Hash password before saving
    let hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const user = await User.create({ name, email, password:hashedPassword});

    // create token for the user
    let token = await generateToken(user._id);

    // cookie options
    res.cookie("token", token, {
        httpOnly: true,
        secure: false, // set to true if using https
        sameSite: "strict",
        maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
    });

    res.status(201).send({ message: "User registered successfully", user, token });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error while signing up : ", error.message);
  }
};

//===================LOGIN CONTROLLER===================//
export const login = async (req, res) => {
    try {
        let { email, password } = req.body;

        // Validation
        if (!email || !password) {
            return res.status(400).send("Please fill all the fields");
        }

        // Check if user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).send({ message: "User does not exist" });
        }

        // Check if password matches
        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if (!isPasswordCorrect) {
            return res.status(400).send({ message: "Invalid Password credentials" });
        }

        // create token for the user
        let token = await generateToken(user._id);

        // cookie options
        res.cookie("token", token, {
            httpOnly: true,
            secure: false, // set to true if using https
            sameSite: "strict",
            maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
        });

        res.status(200).send({ message: "User logged in successfully", user, token });

    } catch(error) {
        console.error(error);
        res.status(500).send("Server error while logging in : ", error.message);
    }
}



//++===================LOGOUT CONTROLLER===================//
export const logout = async (req, res) => {
    try {
        res.clearCookie("token", {
            httpOnly: true,
            secure: false, // set to true if using https
            sameSite: "strict",
        });
        res.status(200).send({ message: "User logged out successfully" });

    } catch(error) {
        console.error(error);
        res.status(500).send("Server error while logging out : ", error.message);
    }
}