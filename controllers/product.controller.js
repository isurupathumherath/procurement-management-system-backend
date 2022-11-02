import {
  saveProductService,
  updateProductService,
  deleteProductService,
  getAllProductService,
  getProductForSupplierService,
} from "../services/index.js";
import Success from "../utils/success.js";

export const saveProductController = async (req, res) => {
  try {
    const supplierID = req.user.supplier;
    const product = await saveProductService(req.body, supplierID);
    res.json(Success(product, " Successfully Product Added."));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const updateProductController = async (req, res) => {
  try {
    const product = await updateProductService(req.params.id, req.body);
    res.json(Success(product, "Successfully Product Updated."));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const deleteProductController = async (req, res) => {
  try {
    const product = await deleteProductService(req.params.id);
    res.json(Success(product, "Successfully product Deleted."));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const getProductController = async (req, res) => {
  try {
    const products = await getAllProductService();
    res.json(Success(products, "Successfully products fetched."));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const getProductSupplierController = async (req, res) => {
  try {
    const supplierID = req.user.supplier;
    const products = await getProductForSupplierService(supplierID);
    res.json(Success(products, "Successfully products fetched."));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};
