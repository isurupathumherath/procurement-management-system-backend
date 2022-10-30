import { Order } from "../models";
import AppError from "../utils/appError";

export const createOrder = (data) =>
  Order.create(data)
    .then((order) => {
      return Promise.resolve(order);
    })
    .catch(() => {
      throw new AppError("Internal server error.", 500);
    });

export const getOrder = (orderId) =>
  Order.findById(orderId)
    .populate("manager")
    .populate("supplier")
    .then((order) => {
      return Promise.resolve(order);
    })
    .catch(() => {
      throw new AppError("Internal server error.", 500);
    });

export const getOrders = () =>
  Order.find()
    .populate("manager")
    .populate("supplier")
    .then((orders) => {
      return Promise.resolve(orders);
    })
    .catch(() => {
      throw new AppError("Internal server error.", 500);
    });

export const updateOrder = (orderId, data) =>
  Order.findByIdAndUpdate(orderId, data, { new: true })
    .then((order) => {
      return Promise.resolve(order);
    })
    .catch(() => {
      throw new AppError("Internal server error.", 500);
    });

export const deleteOrder = (orderId) =>
  Order.findByIdAndDelete(orderId)
    .then((order) => {
      return Promise.resolve(order);
    })
    .catch(() => {
      throw new AppError("Internal server error.", 500);
    });
