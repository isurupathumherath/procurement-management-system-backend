import { DeliveryAdvice } from "../models/index.js";
import AppError from "../utils/appError.js";

export const createDeliveryAdvice = (data) =>
  DeliveryAdvice.create(data)
    .then((delivery) => {
      return Promise.resolve(delivery);
    })
    .catch(() => {
      throw new AppError("Internal server error.", 500);
    });

export const getAllDeliveryAdvice = () =>
  DeliveryAdvice.find()
    .then((delivery) => {
      return Promise.resolve(delivery);
    })
    .catch(() => {
      throw new AppError("Internal server error.", 500);
    });

export const getDeliveryAdviceforManager = (id) =>
  DeliveryAdvice.find({ managerID: id })
    .then((delivery) => {
      return Promise.resolve(delivery);
    })
    .catch(() => {
      throw new AppError("Internal server error.", 500);
    });

export const getDeliveryAdviceforSupplier = (id) =>
  DeliveryAdvice.find({ supplierID: id })
    .then((delivery) => {
      return Promise.resolve(delivery);
    })
    .catch(() => {
      throw new AppError("Internal server error.", 500);
    });

export const updateDeliveryAdvice = (deliveryId, data) =>
  DeliveryAdvice.findByIdAndUpdate(deliveryId, data, { new: true })
    .then((delivery) => {
      return Promise.resolve(delivery);
    })
    .catch(() => {
      throw new AppError("Internal server error.", 500);
    });

export const deleteDeliveryAdvice = (deliveryId) =>
  DeliveryAdvice.findByIdAndDelete(deliveryId)
    .then((delivery) => {
      return Promise.resolve(delivery);
    })
    .catch(() => {
      throw new AppError("Internal server error.", 500);
    });
