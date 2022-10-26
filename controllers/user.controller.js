import { save, login } from "../services/index.js";
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
