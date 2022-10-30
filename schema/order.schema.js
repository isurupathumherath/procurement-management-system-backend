import { Joi } from "celebrate";

export const CreateOrderBodySchema = Joi.object({
  orderType: Joi.string().required(),
  description: Joi.string().required(),
  items: Joi.array().items({
    name: Joi.string().required(),
    measuringUnit: Joi.string().required(),
    quantity: Joi.number().required(),
  }),
  status: Joi.string().valid("PLACED").required(),
  requiredDate: Joi.date().required(),
  supplier: Joi.string().length(24).hex().required(),
  deliveryAddress: Joi.string().required(),
});

export const OrderIdSchema = Joi.object({
  orderId: Joi.string().length(24).hex(),
});

export const UpdateOrderBodySchema = Joi.object({
  orderType: Joi.string().optional(),
  description: Joi.string().optional(),
  items: Joi.array().items({
    name: Joi.string().optional(),
    measuringUnit: Joi.string().optional(),
    quantity: Joi.number().optional(),
    available: Joi.string().valid("PENDING", "No", "YES").optional(),
    deliveredQuantity: Joi.number().optional(),
  }),
  approval: Joi.string().valid("PENDING", "REJECTED", "APPROVED").optional(),
  status: Joi.string()
    .valid("PLACED", "PROCEED", "INPROGRESS", "DELEVERED")
    .optional(),
  requiredDate: Joi.date().optional(),
  supplier: Joi.string().length(24).hex().optional(),
  deliveryAddress: Joi.string().optional(),
  deliveredDate: Joi.date().optional(),
  isReceiptPrinted: Joi.boolean().optional(),
});
