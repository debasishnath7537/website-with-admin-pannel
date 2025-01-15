import User from "../models/user-models.js";

const deleteUserByID = async (req, res) => {
  try {
    const id = req.params.id;
    await User.deleteOne({ _id: id });
    return res.status(200).json({ message: "user deleted sucessfully" });
  } catch (error) {
    next(error);
  }
};

export default deleteUserByID;
