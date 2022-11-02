import {
  createDeliveryAdvice,
  updateDeliveryAdvice,
  deleteDeliveryAdvice,
  getAllDeliveryAdvice,
  getDeliveryAdviceforManager,
  getDeliveryAdviceforSupplier,
} from "../repository/index.js";
import AppError from "../utils/appError.js";

export const saveDeliveryAdviceService = async (data) => {
  const {
    orderID,
    deliveryItems,
    deliveredDate,
    quantity,
    description,
    supplierID,
    managerID,
  } = data;
  try {
    const deliveryAdvice = await createDeliveryAdvice({
      orderID,
      deliveryItems,
      deliveredDate,
      quantity,
      description,
      supplierID,
      managerID,
    });
    return Promise.resolve(deliveryAdvice);
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const updateDeliveryAdviceService = async (id, data) => {
  try {
    const delivery = await updateDeliveryAdvice(id, data);
    return Promise.resolve(delivery);
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const deleteDeliveryAdviceService = async (id) => {
  try {
    const delivery = await deleteDeliveryAdvice(id);
    return Promise.resolve(delivery);
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const getAllDeliveryAdviceService = async () => {
  try {
    const delivery = await getAllDeliveryAdvice();
    return Promise.resolve(delivery);
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const getDeliveryAdviceForSupplierService = async (id) => {
  try {
    const delivery = await getDeliveryAdviceforSupplier(id);
    return Promise.resolve(delivery);
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const getDeliveryAdviceForManagerService = async (id) => {
  try {
    const delivery = await getDeliveryAdviceforManager(id);
    return Promise.resolve(delivery);
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};
