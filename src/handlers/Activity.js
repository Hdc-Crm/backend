import { Router } from "express";
import {
  createActivity,
  getActivities,
  updateActivity,
  deleteActivity,
} from "../services/Activity.js";

const router = Router();

router.post("/", createActivity);
router.get("/", getActivities);
router.put("/:id", updateActivity);
router.delete("/:id", deleteActivity);  

export default router;