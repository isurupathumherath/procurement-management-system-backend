import {
  createOrder,
  getOrder,
  getOrders,
  updateOrder,
  deleteOrder,
} from "../repository/index.js";
import AppError from "../utils/appError.js";

export const createOrderSrv = async (data, user) => {
  try {
    let order = data;
    if (user.role === "SITE_MANAGER") order = { ...order, supplier: user._id };
    else throw new AppError("You not allowed to proceed.", 403);
    return await createOrder(order);
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const getOrderSrv = async (orderId) => {
  try {
    return await getOrder(orderId);
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const getOrdersSrv = async () => {
  try {
    return await getOrders();
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const updateOrderSrv = async (orderId, data) => {
  try {
    return await updateOrder(orderId, data);
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const deleteOrderSrv = async (orderId) => {
  try {
    return await deleteOrder(orderId);
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};
