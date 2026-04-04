/** @format */

import { Router } from "express";
import {
  createLead,
  getLeads,
  updateLead,
  deleteLead,
} from "../services/Lead.js";

const router = Router();

router.post("/", createLead);
router.get("/", getLeads);
router.put("/:id", updateLead);
router.delete("/:id", deleteLead);

export default router;
