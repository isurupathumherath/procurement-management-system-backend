import mongoose from "mongoose";

const { Schema } = mongoose;

const DeliveryAdviceSchema = new Schema({
  orderID: String,
  deliveryItems: String,
  deliveredDate: String,
  quantity: String,
  description: String,
  supplierID: String,
  managerID: String,
});

export const DeliveryAdvice = mongoose.model(
  "DeliveryAdvice",
  DeliveryAdviceSchema,
);
