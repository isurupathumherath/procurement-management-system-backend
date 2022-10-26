import { User } from "../models/index.js";
import AppError from "../utils/appError.js";

export const saveUser = (data) =>
  User.create(data)
    .then((user) => {
      return Promise.resolve(user);
    })
    .catch(() => {
      throw new AppError("Internal server error.", 500);
    });

export const loginUser = (email) =>
  User.findOne({ email })
    .then((user) => {
      return Promise.resolve(user);
    })
    .catch(() => {
      throw new AppError("Internal server error.", 500);
    });

export const getUser = (data) =>
  User.findOne(data)
    .select("-password")
    .then((user) => {
      return Promise.resolve(user);
    })
    .catch(() => {
      throw new AppError("Internal server error.", 500);
    });
