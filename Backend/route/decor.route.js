import express from "express";

import { getDecor } from '../controller/decor.controller.js';

const router=express.Router();

router.get("/", getDecor);

export default router;