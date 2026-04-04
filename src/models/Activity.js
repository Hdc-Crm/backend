// src/models/Activity.js

import mongoose from "mongoose";

const activitySchema = new mongoose.Schema(
  {
    action: {
      type: String,
      required: true,
      enum: [
        "lead_created",
        "lead_updated",
        "lead_deleted",
        "status_changed",
        "task_created",
        "task_completed",
        "deal_created",
        "deal_won",
        "deal_lost",
      ],
    },

    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    lead: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Lead",
    },

    deal: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Deal",
    },

    task: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Task",
    },

    metadata: {
      type: Object,
      default: {},
    },
  },
  { timestamps: true }
);

export default mongoose.model("Activity", activitySchema);