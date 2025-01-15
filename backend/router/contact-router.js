// routes/contact-router.js
import express from "express";
import contactForm from "../controllers/contact-controllers.js";

const router = express.Router();

// Define the route for submitting the contact form
router.post("/contact", contactForm);

export default router;
