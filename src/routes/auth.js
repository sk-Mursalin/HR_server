
import express from "express";
import { login, verify } from "../controller/authController.js";
import authMiddleware from "../middlewares/authmiddleware.js"
export const authRouter = express.Router();

authRouter.post("/login", login);
authRouter.get("/verify", authMiddleware, verify);

