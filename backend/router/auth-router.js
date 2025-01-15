import express from "express";
import {
  home,
  register,
  login,
  user,
} from "../controllers/auth-controllers.js";
import { signupSchema, loginSchema } from "../validators/auth-validator.js";
import validate from "../middleware-validate/validate-middleware.js";
import { authMiddleware } from "../middleware-validate/auth-middleware.js";

const router = express.Router();

router.get("/", home);

router.post("/register", validate(signupSchema), register);

router.post("/login", validate(loginSchema), login);

router.get("/user", authMiddleware, user);

export default router;
