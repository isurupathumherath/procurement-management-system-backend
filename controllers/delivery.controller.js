import {
  saveOrderNewService,
  updateOrderNewService,
  deleteOrderNewService,
  getNewOrdersService,
  getNewOrderForManagerService,
  getNewOrderForSupplierService,
  getSingleOrderService,
} from "../services/index.js";
import Success from "../utils/success.js";

export const saveOrderNewController = async (req, res) => {
  try {
    const managerID = req.user._id;
    const order = await saveOrderNewService(req.body, managerID);
    res.json(Success(order, " Successfully order Added."));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const updateNewOrderController = async (req, res) => {
  try {
    const order = await updateOrderNewService(req.params.id, req.body);
    res.json(Success(order, "Successfully order Updated."));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const deleteNewOrderController = async (req, res) => {
  try {
    const order = await deleteOrderNewService(req.params.id);
    res.json(Success(order, "Successfully child Deleted."));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const getOrdersNewController = async (req, res) => {
  try {
    const orders = await getNewOrdersService();
    res.json(Success(orders, "Successfully orders fetched."));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const getOrdersNewManagerController = async (req, res) => {
  try {
    const managerID = req.user._id;
    const orders = await getNewOrderForManagerService(managerID);
    res.json(Success(orders, "Successfully orders fetched."));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const getOrdersNewSupplierController = async (req, res) => {
  try {
    const supplierID = req.user.supplier;
    const orders = await getNewOrderForSupplierService(supplierID);
    res.json(Success(orders, "Successfully orders fetched."));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const getSingleOrderController = async (req, res) => {
  try {
    const order = await getSingleOrderService(req.params.id);
    res.json(Success(order, "Successfully orders fetched."));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};
