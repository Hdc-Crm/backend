/** @format */

import { Router } from "express";
import userRouter from "./user.js";
import { create, login } from "../services/user.js";

const router = Router();

router.use("/users", userRouter);
router.post("/auth/register", create);
router.post("/auth/login", login);

export default router;
