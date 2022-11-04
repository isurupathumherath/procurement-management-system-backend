import mongoose from "mongoose";

const { Schema } = mongoose;

const ProductSchema = new Schema({
  itemName: String,
  title: String,
  itemBrand: String,
  image: String,
  availableQty: Number,
  description: String,
  measuringUnit: String,
  price: Number,
  inStock: {
    type: Boolean,
    default: false,
  },
  supplierID: String,
});

export const Product = mongoose.model("Product", ProductSchema);
