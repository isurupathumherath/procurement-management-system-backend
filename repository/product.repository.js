import { Product } from "../models/index.js";
import AppError from "../utils/appError.js";

export const createProduct = (data) =>
  Product.create(data)
    .then((product) => {
      return Promise.resolve(product);
    })
    .catch(() => {
      throw new AppError("Internal server error.", 500);
    });

export const getAllProducts = () =>
  Product.find()
    .then((product) => {
      return Promise.resolve(product);
    })
    .catch(() => {
      throw new AppError("Internal server error.", 500);
    });

export const getProductforSupplier = (id) =>
  Product.find({ supplierID: id })
    .then((product) => {
      return Promise.resolve(product);
    })
    .catch(() => {
      throw new AppError("Internal server error.", 500);
    });

export const updateProduct = (productId, data) =>
  Product.findByIdAndUpdate(productId, data, { new: true })
    .then((product) => {
      return Promise.resolve(product);
    })
    .catch(() => {
      throw new AppError("Internal server error.", 500);
    });

export const deleteProduct = (productId) =>
  Product.findByIdAndDelete(productId)
    .then((product) => {
      return Promise.resolve(product);
    })
    .catch(() => {
      throw new AppError("Internal server error.", 500);
    });
