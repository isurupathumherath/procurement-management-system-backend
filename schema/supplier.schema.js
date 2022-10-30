import { Joi } from "celebrate";

export const CreateSupplierBodySchema = Joi.object({
  name: Joi.string().required(),
  mobile: Joi.string().required(),
  email: Joi.string().email().required(),
  company: Joi.string().required(),
  address: Joi.string().required(),
});

export const SupplierIdSchema = Joi.object({
  supplierId: Joi.string().length(24).hex(),
});

export const UpdateSupplierBodySchema = Joi.object({
  name: Joi.string().optional(),
  mobile: Joi.string().optional(),
  email: Joi.string().email().optional(),
  company: Joi.string().optional(),
  address: Joi.string().optional(),
});
