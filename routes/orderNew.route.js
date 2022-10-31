import express from "express";
import {
  saveOrderNewController,
  updateNewOrderController,
  deleteNewOrderController,
  getOrdersNewController,
  getOrdersNewManagerController,
  getOrdersNewSupplierController,
} from "../controllers/index.js";
import { authenticate } from "../middleware/auth.middleware.js";

const orderNewRouter = express.Router();

orderNewRouter.post("/", authenticate, saveOrderNewController);
orderNewRouter.put("/:id", updateNewOrderController);
orderNewRouter.delete("/:id", deleteNewOrderController);
orderNewRouter.get("/", getOrdersNewController);
orderNewRouter.get("/manager", authenticate, getOrdersNewManagerController);
orderNewRouter.get("/supplier", authenticate, getOrdersNewSupplierController);

export default orderNewRouter;
