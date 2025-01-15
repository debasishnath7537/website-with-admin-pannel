import User from "../models/user-models.js";

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}, { password: 0 });
    console.log(users);
    if (!users || users.length === 0) {
      return res.status(404).json({ message: "No user Found" });
    }
    return res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

export default getAllUsers;
