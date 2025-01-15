const adminmiddleware = async (req, res, next) => {
  try {
    console.log(req.user);
    const adminRole = req.user.isAdmin;
    if (!adminRole) {
      return res
        .status(403)
        .json({ message: "Access denaied> User is not admin" });
    }
    next();
  } catch (error) {
    next(error);
  }
};

export default adminmiddleware;
