import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

import dotenv from "dotenv";
dotenv.config();

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

// Comapre Password
userSchema.methods.comparePassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

// jWT token
const JWT_SECRET = process.env.JWT_SECRET;
userSchema.methods.generateToken = async function () {
  try {
    console.log("Generating token for user:", this._id);
    return jwt.sign(
      {
        userId: this._id.toString(),
        email: this.email,
        isAdmin: this.isAdmin,
      },
      JWT_SECRET,
      {
        expiresIn: "30d",
      }
    );
  } catch (error) {
    console.error("Error generating token:", error.message, error.stack);
    throw error;
  }
};

export default mongoose.model("User", userSchema);
