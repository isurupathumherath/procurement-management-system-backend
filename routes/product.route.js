import express from "express";
import {
  saveProductController,
  updateProductController,
  deleteProductController,
  getProductController,
  getProductSupplierController,
} from "../controllers/index.js";
import { authenticate } from "../middleware/auth.middleware.js";

const productRouter = express.Router();

productRouter.post("/", authenticate, saveProductController);
productRouter.put("/:id", updateProductController);
productRouter.delete("/:id", deleteProductController);
productRouter.get("/", getProductController);
productRouter.get("/supplier", authenticate, getProductSupplierController);

export default productRouter;
