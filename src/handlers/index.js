/** @format */

import { Router } from "express";
import userRouter from "./user.js";
import { create } from "../services/user.js";
import auth from "./auth.js";

const router = Router();

router.use("/users", userRouter);
router.use("/auth/register", create);
router.use("/auth", auth);

export default router;
