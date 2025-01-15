import User from "../models/user-models.js";
import bcrypt from "bcryptjs";

export const home = (req, res) => {
  return res.send("homeeee");
};

export const register = async (req, res, next) => {
  try {
    const { username, email, phone, password } = req.body;
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return res.status(400).json({ message: "email already exist" });
    }

    //hash password
    const saltRound = 10;
    const hashPassword = await bcrypt.hash(password, saltRound);

    const userCreated = await User.create({
      username,
      email,
      phone,
      password: hashPassword,
    });
    const token = await userCreated.generateToken();
    return res.status(201).json({
      message: "User registered successfully",
      // data: {
      //   username: userCreated.username,
      //   email: userCreated.email,
      //   phone: userCreated.phone,
      //   userId: userCreated._id,
      // },
      token: await userCreated.generateToken(),
      userId: userCreated._id.toString(),
    });
  } catch (error) {
    // console.error("Error in register function:", error.message);
    // res.status(500).json({ error: "Internal Server Error" });
    next(error);
  }
};

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const userExist = await User.findOne({ email: email });
    if (!userExist) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const user = await userExist.comparePassword(password);

    if (user) {
      res.status(200).json({
        message: "Login successfully",
        token: await userExist.generateToken(),
        userId: userExist._id.toString(),
      });
    } else {
      res.status(401).json({ message: "Invalid email or password" });
    }
  } catch (error) {
    next(error);
  }
};

export const user = async (req, res) => {
  try {
    const userData = req.user;
    console.log(userData);
    return res.status(200).json({ userData });
  } catch (error) {
    console.log(`error from user route ${error}`);
  }
};
