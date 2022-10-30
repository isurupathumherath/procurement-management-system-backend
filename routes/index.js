import express from "express";
import userRouter from "./user.route.js";
import supplierRouter from "./supplier.route.js";
import orderRouter from "./order.route.js";

const apiRouter = express.Router();

apiRouter.use("/user", userRouter);
apiRouter.use("/supplier", supplierRouter);
apiRouter.use("/order", orderRouter);

export default apiRouter;
