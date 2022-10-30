import { Supplier } from "../models";
import AppError from "../utils/appError";

export const createSupplier = (data) =>
  Supplier.create(data)
    .then((supplier) => {
      return Promise.resolve(supplier);
    })
    .catch(() => {
      throw new AppError("Internal server error.", 500);
    });

export const getSupplier = (supplierId) =>
  Supplier.findById(supplierId)
    .then((supplier) => {
      return Promise.resolve(supplier);
    })
    .catch(() => {
      throw new AppError("Internal server error.", 500);
    });

export const getAllSupplier = () =>
  Supplier.find()
    .then((suppliers) => {
      return Promise.resolve(suppliers);
    })
    .catch(() => {
      throw new AppError("Internal server error.", 500);
    });

export const updateSupplier = (supplierId, data) =>
  Supplier.findByIdAndUpdate(supplierId, data, { new: true })
    .then((supplier) => {
      return Promise.resolve(supplier);
    })
    .catch(() => {
      throw new AppError("Internal server error.", 500);
    });

export const deleteSupplier = (supplierId) =>
  Supplier.findByIdAndDelete(supplierId)
    .then((supplier) => {
      return Promise.resolve(supplier);
    })
    .catch(() => {
      throw new AppError("Internal server error.", 500);
    });
