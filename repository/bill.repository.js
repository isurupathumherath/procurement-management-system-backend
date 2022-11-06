import { Bill } from "../models/index.js";
import AppError from "../utils/appError.js";

export const saveBill = (data) =>
  Bill.create(data)
    .then((bill) => {
      return Promise.resolve(bill);
    })
    .catch((err) => {
      throw new AppError(`Internal Server Error: ${err}`, 500);
    });

export const getBill = () =>
  Bill.find({})
    .then((bill) => {
      return Promise.resolve(bill);
    })
    .catch((err) => {
      throw new AppError(`Internal Server Error: ${err}`, 500);
    });

export const getBillById = (id) =>
  Bill.findById(id)
    .then((bill) => {
      if (!bill) {
        throw new AppError("Bill Details not Found", 404);
      }
      return Promise.resolve(bill);
    })
    .catch((err) => {
      throw new AppError(`Internal Server Error: ${err}`, 500);
    });

export const getBillByChildId = (id) =>
  Bill.find({ childId: id })
    .then((bill) => {
      if (!bill) {
        throw new AppError("Bill Details not Found", 404);
      }
      return Promise.resolve(bill);
    })
    .catch((err) => {
      throw new AppError(`Internal Server Error: ${err}`, 500);
    });

export const updateBill = (id, data) =>
  Bill.findByIdAndUpdate(id, data, { new: true })
    .then((bill) => {
      if (!bill) {
        throw new AppError("Bill Details not Found", 404);
      }
      return Promise.resolve(bill);
    })
    .catch((err) => {
      throw new AppError(`Internal Server Error: ${err}`, 500);
    });

export const deleteBill = (id) =>
  Bill.findByIdAndDelete(id)
    .then((bill) => {
      if (!bill) {
        throw new AppError("Bill Details not Found", 404);
      }
      return Promise.resolve(bill);
    })
    .catch((err) => {
      throw new AppError(`Internal Server Error: ${err}`, 500);
    });
