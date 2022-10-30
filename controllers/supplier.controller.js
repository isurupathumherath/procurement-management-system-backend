import { create, getOne, getAll, update, remove } from "../services";
import Success from "../utils/success";

export const createSupplier = async (req, res) => {
  try {
    const supplier = await create(req.body);
    res.json(Success(supplier, "Create supplier success."));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const getSupplier = async (req, res) => {
  try {
    const supplier = await getOne(req.params.supplierId);
    res.json(Success(supplier, "Get supplier success."));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const getSuppliers = async (req, res) => {
  try {
    const suppliers = await getAll();
    res.json(Success(suppliers, "Get suppliers success."));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const updateSupplier = async (req, res) => {
  try {
    const supplier = await update(req.params.supplierId, req.body);
    res.json(Success(supplier, "Update supplier success."));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const deleteSupplier = async (req, res) => {
  try {
    const supplier = await remove(req.params.supplierId);
    res.json(Success(supplier, "Delete supplier success."));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};
