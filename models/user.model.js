import mongoose from "mongoose";

const { Schema } = mongoose;

const UserSchema = new Schema({
  name: String,
  nic: String,
  email: String,
  mobile: String,
  department: String,
  password: String,
  role: String,
  siteName: String,
  supplier: String,
});

export const User = mongoose.model("User", UserSchema);
