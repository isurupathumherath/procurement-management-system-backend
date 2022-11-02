import {
  save,
  login,
  getUsersSrv,
  updateUserSrv,
  deleteUserSrv,
} from "../services/index.js";
import Success from "../utils/success.js";

export const saveUser = async (req, res) => {
  try {
    const user = await save(req.body);
    res.json(Success(user, "Successfully registered."));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const loginUser = async (req, res) => {
  try {
    const user = await login(req.body);
    res.json(Success(user, "Successfully logged in."));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const viewProfile = async (req, res) => {
  try {
    res.json(Success(req.user, "View profile success."));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const getUsersController = async (req, res) => {
  try {
    const users = await getUsersSrv();
    res.json(Success(users, "Successfully users fetched."));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const updateUserController = async (req, res) => {
  try {
    const user = await updateUserSrv(req.params.id, req.body);
    res.json(Success(user, "Successfully user Updated."));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const deleteUserController = async (req, res) => {
  try {
    const user = await deleteUserSrv(req.params.id);
    res.json(Success(user, "Successfully user Deleted."));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};
