import mongoose from "mongoose";

const { Schema } = mongoose;

const ProductSchema = new Schema({
  itemName: String,
  itemBrand: String,
  availableQty: Number,
  description: String,
  measuringUnit: String,
  price: String,
  supplierID: String,
});

export const Product = mongoose.model("Product", ProductSchema);
