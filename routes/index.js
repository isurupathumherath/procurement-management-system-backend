import express from "express";
import userRouter from "./user.route.js";

const apiRouter = express.Router();

apiRouter.use("/user", userRouter);

export default apiRouter;
