import express from "express";
import userRouter from "./user.route.js";
import supplierRouter from "./supplier.route.js";
import orderRouter from "./order.route.js";
import orderNewRouter from "./delivery.route.js";
import deliveryAdviceRouter from "./deliveryAdvice.route.js";
import productRouter from "./product.route.js";
import paymentRouter from "./payment.route.js";

const apiRouter = express.Router();

apiRouter.use("/user", userRouter);
apiRouter.use("/supplier", supplierRouter);
apiRouter.use("/order", orderRouter);
apiRouter.use("/orderNew", orderNewRouter);
apiRouter.use("/deliveryAdvice", deliveryAdviceRouter);
apiRouter.use("/product", productRouter);
apiRouter.use("/payment", paymentRouter);

export default apiRouter;
