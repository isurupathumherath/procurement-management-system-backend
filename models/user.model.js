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
  site: {
    type: Schema.Types.ObjectId,
    ref: "Site",
  },
});

export const User = mongoose.model("User", UserSchema);
