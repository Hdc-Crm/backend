import { Router } from "express";
import {
  createDeal,
  getDeals,
  updateDeal,
  deleteDeal,
} from "../services/Deals.js";

const router = Router();

router.post("/", createDeal);
router.get("/", getDeals);
router.put("/:id", updateDeal);
router.delete("/:id", deleteDeal);

export default router;