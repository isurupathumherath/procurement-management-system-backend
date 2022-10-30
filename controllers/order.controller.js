import {
  createOrderSrv,
  getOrderSrv,
  getOrdersSrv,
  updateOrderSrv,
  deleteOrderSrv,
} from "../services";
import Success from "../utils/success";

export const createOrder = async (req, res) => {
  try {
    const order = await createOrderSrv(req.body, req.user);
    res.json(Success(order, "Create order success."));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const getOrder = async (req, res) => {
  try {
    const order = await getOrderSrv(req.params.orderId);
    res.json(Success(order, "Get order success."));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const getOrders = async (req, res) => {
  try {
    const orders = await getOrdersSrv();
    res.json(Success(orders, "Get orders success."));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const updateOrder = async (req, res) => {
  try {
    const order = await updateOrderSrv(req.params.orderId, req.body);
    res.json(Success(order, "Update order success."));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const deleteOrder = async (req, res) => {
  try {
    const order = await deleteOrderSrv(req.params.orderId);
    res.json(Success(order, "Delete order success."));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};
