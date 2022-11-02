import mongoose from "mongoose";

const { Schema } = mongoose;

const TermSchema = new Schema({
  title: String,
  description: String,
  accept: {
    type: Boolean,
    default: false,
  },
  userID: {
    type: String,
    default: "user still didn't accept the term",
  },
});

export const Term = mongoose.model("Term", TermSchema);
