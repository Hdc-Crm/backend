/** @format */

import { Router } from "express";
import { create, login } from "../services/user.js";

const router = Router();

router.post("/create", create);
router.post("/login", login);

export default router;
