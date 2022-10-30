import express from "express";
import userRouter from "./user.route.js";
import supplierRouter from "./supplier.route.js";

const apiRouter = express.Router();

apiRouter.use("/user", userRouter);
apiRouter.use("/supplier", supplierRouter);

export default apiRouter;
