import { Router } from "express";
import { celebrate } from "celebrate";
import {
  CreateSupplierBodySchema,
  SupplierIdSchema,
  UpdateSupplierBodySchema,
} from "../schema";
import {
  createSupplier,
  getSupplier,
  getSuppliers,
  updateSupplier,
  deleteSupplier,
} from "../controllers";
import { authenticate } from "../middleware/auth.middleware";

const supplierRouter = Router();

supplierRouter.post(
  "/",
  authenticate,
  celebrate({ body: CreateSupplierBodySchema }),
  createSupplier,
);

supplierRouter.get(
  "/:supplierId",
  authenticate,
  celebrate({ params: SupplierIdSchema }),
  getSupplier,
);

supplierRouter.get("/", authenticate, getSuppliers);

supplierRouter.put(
  "/:supplierId",
  authenticate,
  celebrate({ params: SupplierIdSchema, body: UpdateSupplierBodySchema }),
  updateSupplier,
);

supplierRouter.delete(
  "/:supplierId",
  authenticate,
  celebrate({ params: SupplierIdSchema }),
  deleteSupplier,
);

export default supplierRouter;
