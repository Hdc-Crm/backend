/** @format */

import bcrypt from "bcryptjs";
import User from "../models/user.js";

const createUser = async (userData) => {
  const existingUser = await User.findOne({ email: userData.email });
  if (existingUser) {
    throw new Error("Email already exists");
  }
  userData.password = await bcrypt.hash(userData.password, 10);
  return await User.create(userData);
};

const create = async (req, res) => {
  try {
    const user = await createUser(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};



export { create, createUser };
