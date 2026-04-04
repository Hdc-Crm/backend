// src/models/Deal.js

import mongoose from "mongoose";

const dealSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    lead: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Lead",
      required: true,
    },

    value: {
      type: Number,
      required: true,
    },

    stage: {
      type: String,
      enum: ["negotiation", "proposal", "closed-won", "closed-lost"],
      default: "negotiation",
    },

    probability: {
      type: Number, // % chance of closing
      min: 0,
      max: 100,
      default: 50,
    },

    expectedCloseDate: {
      type: Date,
    },

    assignedTo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    notes: String,
  },
  { timestamps: true }
);

export default mongoose.model("Deal", dealSchema);