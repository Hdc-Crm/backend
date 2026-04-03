/** @format */

import { body } from "express-validator";

export const createUserValidator = [
  body("name").trim().notEmpty().withMessage("Name is required"),
  body("email").trim().notEmpty().isEmail().withMessage("Invalid email format"),
  body("password")
    .trim()
    .notEmpty()
    .isLength({ min: 8 })
    .withMessage("Password must be at least 6 characters long"),
];

export const loginUserValidator = [
  body("email").trim().notEmpty().isEmail().withMessage("Invalid email format"),
  body("password")
    .trim()
    .notEmpty()
    .withMessage("Password is required")
    .isLength({ min: 8 })
    .withMessage("Password must be at least 6 characters long")
];
