import config from "../config/index.js";
import db from "./db.js";
import jwt from "jsonwebtoken";
import { createError } from "./error.js";
import role from "./role.js";

export const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return next(createError(401, "You are not authenticated!"));
  }

  const token = authHeader.split(" ")[1];
  jwt.verify(token, config.secret, (err, user) => {
    if (err) return next(createError(403, "Token is not valid!"));
    req.user = user;
    next();
  });
};

export const verifyCashier = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.role === "cashier") {
      next();
    } else {
      return next(createError(403, "You are not authorized!"));
    }
  });
};

export const verifyAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.role === "admin") {
      next();
    } else {
      return next(createError(403, "You are not authorized!"));
    }
  });
};

export const verifySuperAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.role === "superadmin") {
      next();
    } else {
      return next(createError(403, "You are not authorized!"));
    }
  });
};
