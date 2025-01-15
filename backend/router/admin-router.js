import express from "express";
import getAllUsers from "../controllers/admin-controllers.js";
import getAllContacts from "../controllers/adminContact-controllers.js";
import getUserByID from "../controllers/adminUpdate-controller.js";
import updateUserById from "../controllers/adminEdit-controller.js";
import { authMiddleware } from "../middleware-validate/auth-middleware.js";
import adminmiddleware from "../middleware-validate/admin-middleware.js";
import deleteUserByID from "../controllers/adminDelete-controller.js";
import deleteContactByID from "../controllers/adminContactDelete-controller.js";
const router = express.Router();

router.get("/users", authMiddleware, adminmiddleware, getAllUsers);
router.get("/users/:id", authMiddleware, adminmiddleware, getUserByID);
router.patch(
  "/users/update/:id",
  authMiddleware,
  adminmiddleware,
  updateUserById
);
router.delete(
  "/users/delete/:id",
  authMiddleware,
  adminmiddleware,
  deleteUserByID
);
router.get("/contact", authMiddleware, adminmiddleware, getAllContacts);
router.delete(
  "/contact/delete/:id",
  authMiddleware,
  adminmiddleware,
  deleteContactByID
);
export default router;
