import User from "../models/user_model.js";
import bcrypt from "bcryptjs";
import generateToken from "../utils/generateToken.js";

export const signup = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already registered" });
    }

    // Hash the password
    const hashPassword = await bcrypt.hash(password, 12);

    // Create a new user
    const newUser = new User({ fullname, email, password: hashPassword });
    await newUser.save();
    if (newUser) {
      generateToken(newUser._id, res);
      return res.status(201).json({
        message: "User registered successfully",
        user: {
          _id: newUser._id,
          fullname: newUser.fullname,
          email: newUser.email,
        },
      });
    }
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res.status(400).json({ message: "Invalid User Credential" });
    }

    // Compare password securely
    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );
    if (!isPasswordCorrect) {
      return res.status(400).json({ message: "Invalid User Credential" });
    }
    generateToken(existingUser._id, res);

    res.status(200).json({
      message: "User logged in successfully",
      user: {
        _id: existingUser._id,
        fullname: existingUser.fullname,
        email: existingUser.email,
      },
    });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const logout = (req, res) => {
  try {
    res.clearCookie("jwt_token");
    res.status(200).json({ message: "User logged out successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const allUsers = async (req, res) => {
  try {
    const loggedInUser = req.user._id;
    const filteredUsers = await User.find({ _id: { $ne: loggedInUser } }).select("-password");

    res.status(200).json({ filteredUsers });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error in finding allUsers" });
  }
};

