import { OrderNew } from "../models/index.js";
import AppError from "../utils/appError.js";

export const createNewOrder = (data) =>
  OrderNew.create(data)
    .then((order) => {
      return Promise.resolve(order);
    })
    .catch(() => {
      throw new AppError("Internal server error.", 500);
    });

export const getNewOrdersForManager = (id) =>
  OrderNew.find({ managerID: id })
    .then((order) => {
      return Promise.resolve(order);
    })
    .catch(() => {
      throw new AppError("Internal server error.", 500);
    });

export const getNewOrdersForSupplier = (id) =>
  OrderNew.find({ supplierID: id })
    .then((order) => {
      return Promise.resolve(order);
    })
    .catch(() => {
      throw new AppError("Internal server error.", 500);
    });

export const getNewOrders = () =>
  OrderNew.find()
    .then((orders) => {
      return Promise.resolve(orders);
    })
    .catch(() => {
      throw new AppError("Internal server error.", 500);
    });

export const getNewOrder = (id) =>
  OrderNew.findById(id)
    .then((order) => {
      return Promise.resolve(order);
    })
    .catch(() => {
      throw new AppError("Internal server error.", 500);
    });

export const updateOrderNew = (orderId, data) =>
  OrderNew.findByIdAndUpdate(orderId, data, { new: true })
    .then((order) => {
      return Promise.resolve(order);
    })
    .catch(() => {
      throw new AppError("Internal server error.", 500);
    });

export const deleteOrderNew = (orderId) =>
  OrderNew.findByIdAndDelete(orderId)
    .then((order) => {
      return Promise.resolve(order);
    })
    .catch(() => {
      throw new AppError("Internal server error.", 500);
    });
