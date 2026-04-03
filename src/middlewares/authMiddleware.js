/** @format */

import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";

const publicPaths = ["/auth/register", "/auth/login", "/users", "/users/create"];

export const authMiddleware = asyncHandler(async (req, res, next) => {
  // allow all auth routes and explicit public user routes
  if (req.path.startsWith("/auth") || publicPaths.includes(req.path)) {
    return next();
  }

  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ message: "Unauthorized access" });
  }
  const [type, token] = authHeader.split(" ");
  if (!token || type !== "Bearer") {
    return res.status(401).json({ message: "Unauthorized access" });
  }
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  req.user = decoded;
  next();
});
