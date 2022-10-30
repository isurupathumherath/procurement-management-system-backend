import {
  createSupplier,
  getSupplier,
  getAllSupplier,
  updateSupplier,
  deleteSupplier,
} from "../repository/index.js";
import AppError from "../utils/appError.js";

export const create = async (data) => {
  try {
    return await createSupplier(data);
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const getOne = async (supplierId) => {
  try {
    return await getSupplier(supplierId);
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const getAll = async () => {
  try {
    return await getAllSupplier();
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const update = async (supplierId, data) => {
  try {
    return await updateSupplier(supplierId, data);
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const remove = async (supplierId) => {
  try {
    return await deleteSupplier(supplierId);
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};
