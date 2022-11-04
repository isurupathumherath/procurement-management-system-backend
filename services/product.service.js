import {
  createProduct,
  getProductforSupplier,
  updateProduct,
  getAllProducts,
  deleteProduct,
} from "../repository/index.js";
import AppError from "../utils/appError.js";

export const saveProductService = async (data, supplierID) => {
  const {
    itemName,
    title,
    itemBrand,
    image,
    availableQty,
    description,
    measuringUnit,
    price,
    inStock,
  } = data;
  try {
    const product = await createProduct({
      itemName,
      title,
      itemBrand,
      image,
      availableQty,
      description,
      measuringUnit,
      price,
      inStock,
      supplierID,
    });
    return Promise.resolve(product);
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const updateProductService = async (id, data) => {
  try {
    const product = await updateProduct(id, data);
    return Promise.resolve(product);
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const deleteProductService = async (id) => {
  try {
    const product = await deleteProduct(id);
    return Promise.resolve(product);
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const getAllProductService = async () => {
  try {
    const products = await getAllProducts();
    return Promise.resolve(products);
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const getProductForSupplierService = async (id) => {
  try {
    const products = await getProductforSupplier(id);
    return Promise.resolve(products);
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};
