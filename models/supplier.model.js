import mongoose from "mongoose";

const { Schema } = mongoose;

const SupplierSchema = new Schema({
  name: String,
  mobile: String,
  email: String,
  company: String,
  address: String,
});

export const Supplier = mongoose.model("Supplier", SupplierSchema);
