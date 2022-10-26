import express from "express";
import { saveUser, loginUser, viewProfile } from "../controllers/index.js";

const userRouter = express.Router();

userRouter.post("/", saveUser);
userRouter.post("/login", loginUser);
userRouter.post("/me", viewProfile);

export default userRouter;
