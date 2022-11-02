import express from "express";
import {
  saveDeliveryAdviceController,
  updateDeliveryAdviceController,
  deleteDeliveryAdviceController,
  getAllDeliveryAdviceController,
  getDeliveryAdviceforManagerController,
  getDeliveryAdviceforSupplierController,
} from "../controllers/index.js";
import { authenticate } from "../middleware/auth.middleware.js";

const deliveryAdviceRouter = express.Router();

deliveryAdviceRouter.post("/", authenticate, saveDeliveryAdviceController);
deliveryAdviceRouter.put("/:id", updateDeliveryAdviceController);
deliveryAdviceRouter.delete("/:id", deleteDeliveryAdviceController);
deliveryAdviceRouter.get("/", getAllDeliveryAdviceController);
deliveryAdviceRouter.get(
  "/manager",
  authenticate,
  getDeliveryAdviceforManagerController,
);
deliveryAdviceRouter.get(
  "/supplier",
  authenticate,
  getDeliveryAdviceforSupplierController,
);

export default deliveryAdviceRouter;
