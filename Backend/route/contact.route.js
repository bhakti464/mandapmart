import express from "express";
import { submitContactForm } from "../controller/contact.controller.js"; // Create this controller

const router = express.Router();

// Contact form route
router.post("/", submitContactForm);

export default router;
