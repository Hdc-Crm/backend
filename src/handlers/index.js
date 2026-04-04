/** @format */

import { Router } from "express";
import userRouter from "./user.js";
import auth from "./auth.js";
import leadRouter from "./Lead.js";
import dealRouter from "./Deals.js";
import taskRouter from "./Tasks.js";
import activityRouter from "./Activity.js";

const router = Router();

router.use("/users", userRouter);
router.use("/auth", auth);
router.use("/leads", leadRouter);
router.use("/deals", dealRouter);
router.use("/tasks", taskRouter);
router.use("/activities", activityRouter);


export default router;
