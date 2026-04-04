// src/models/Lead.js

import mongoose from "mongoose";

const leadSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: String,
    phone: String,
    company: String,

    status: {
      type: String,
      enum: ["new", "contacted", "qualified", "proposal", "won", "lost"],
      default: "new",
    },

    source: {
      type: String,
      enum: ["website", "facebook", "instagram", "referral", "other"],
      default: "other",
    },

    assignedTo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    notes: String,
  },
  { timestamps: true }
);

export default mongoose.model("Lead", leadSchema);