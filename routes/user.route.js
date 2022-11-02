import express from "express";
import { celebrate } from "celebrate";
import { SignupBodySchema, LoginBodySchema } from "../schema/user.schema.js";
import {
  saveUser,
  loginUser,
  viewProfile,
  getUsersController,
  updateUserController,
  deleteUserController,
} from "../controllers/index.js";
import { authenticate } from "../middleware/auth.middleware.js";

const userRouter = express.Router();

userRouter.post("/", celebrate({ body: SignupBodySchema }), saveUser);
userRouter.post("/login", celebrate({ body: LoginBodySchema }), loginUser);
userRouter.get("/me", authenticate, viewProfile);
userRouter.get("/", getUsersController);
userRouter.put("/:id", updateUserController);
userRouter.delete("/:id", deleteUserController);

export default userRouter;
