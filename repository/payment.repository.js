import { Payment } from "../models/index.js";
import AppError from "../utils/appError.js";

export const savePayment = (data) =>
  Payment.create(data)
    .then((payment) => {
      return Promise.resolve(payment);
    })
    .catch((err) => {
      throw new AppError(`Internal Server Error: ${err}`, 500);
    });

export const getPayment = () =>
  Payment.find({})
    .then((payment) => {
      return Promise.resolve(payment);
    })
    .catch((err) => {
      throw new AppError(`Internal Server Error: ${err}`, 500);
    });

export const getPaymentById = (id) =>
  Payment.findById(id)
    .then((payment) => {
      if (!payment) {
        throw new AppError("Payment Details not Found", 404);
      }
      return Promise.resolve(payment);
    })
    .catch((err) => {
      throw new AppError(`Internal Server Error: ${err}`, 500);
    });

export const getPaymentByBillId = (id) =>
  Payment.find({ billId: id })
    .then((payment) => {
      if (!payment) {
        throw new AppError("Payment Details not Found", 404);
      }
      return Promise.resolve(payment);
    })
    .catch((err) => {
      throw new AppError(`Internal Server Error: ${err}`, 500);
    });

export const updatePayment = (id, data) =>
  Payment.findByIdAndUpdate(id, data, { new: true })
    .then((payment) => {
      if (!payment) {
        throw new AppError("Payment Details not Found", 404);
      }
      return Promise.resolve(payment);
    })
    .catch((err) => {
      throw new AppError(`Internal Server Error: ${err}`, 500);
    });

export const deletePayment = (id) =>
  Payment.findByIdAndDelete(id)
    .then((payment) => {
      if (!payment) {
        throw new AppError("Payment Details not Found", 404);
      }
      return Promise.resolve(payment);
    })
    .catch((err) => {
      throw new AppError(`Internal Server Error: ${err}`, 500);
    });
