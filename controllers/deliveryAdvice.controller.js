import {
  saveDeliveryAdviceService,
  updateDeliveryAdviceService,
  deleteDeliveryAdviceService,
  getAllDeliveryAdviceService,
  getDeliveryAdviceForSupplierService,
  getDeliveryAdviceForManagerService,
} from "../services/index.js";
import Success from "../utils/success.js";

export const saveDeliveryAdviceController = async (req, res) => {
  try {
    const delivery = await saveDeliveryAdviceService(req.body);
    res.json(Success(delivery, " Successfully Delivery Advice Added."));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const updateDeliveryAdviceController = async (req, res) => {
  try {
    const delivery = await updateDeliveryAdviceService(req.params.id, req.body);
    res.json(Success(delivery, "Successfully Delivery Updated."));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const deleteDeliveryAdviceController = async (req, res) => {
  try {
    const delivery = await deleteDeliveryAdviceService(req.params.id);
    res.json(Success(delivery, "Successfully delivery Deleted."));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const getAllDeliveryAdviceController = async (req, res) => {
  try {
    const delivery = await getAllDeliveryAdviceService();
    res.json(Success(delivery, "Successfully deliveries fetched."));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const getDeliveryAdviceforSupplierController = async (req, res) => {
  try {
    const supplierID = req.user.supplier;
    const delivery = await getDeliveryAdviceForSupplierService(supplierID);
    res.json(Success(delivery, "Successfully deliveries fetched."));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const getDeliveryAdviceforManagerController = async (req, res) => {
  try {
    const managerID = req.user._id;
    const delivery = await getDeliveryAdviceForManagerService(managerID);
    res.json(Success(delivery, "Successfully deliveries fetched."));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};
