import mongoose from "mongoose";

const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    firstName: String,
    lastName: String,
    userName: String,
    email: String,
    password: String,
    role: String,
  },
  { versionKey: false },
);

export const User = mongoose.model("User", UserSchema);
