import { Joi } from "celebrate";

export const SignupBodySchema = Joi.object({
  name: Joi.string().required().min(3),
  nic: Joi.string().required().min(10).max(12),
  email: Joi.string().email().required(),
  mobile: Joi.string().min(10).required(),
  department: Joi.string()
    .required()
    .valid("PROCUREMENT", "MANAGEMENT", "ONSITE"),
  password: Joi.string()
    .required()
    .pattern(
      /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/,
    ),
  role: Joi.string().valid("SITE_MANAGER", "PROCUREMENT", "SENIOR", "SUPPLIER"),
  site: Joi.when("role", {
    is: "ONSITE",
    then: Joi.string().required().length(24).hex(),
    otherwise: Joi.forbidden(),
  }),
});

export const LoginBodySchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

export const MeHeader = Joi.object({
  token: Joi.string().required(),
});
