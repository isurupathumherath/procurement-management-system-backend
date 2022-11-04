import mongoose from "mongoose";

const { Schema } = mongoose;

const BillSchama = new Schema(
  {
    billName: {
      type: String,
      required: true,
    },
    childId: {
      type: String,
      required: true,
    },
    item: {
      type: Array,
      required: false,
    },
    totalBill: {
      type: Number,
      required: true,
    },
    status: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true, versionKey: false },
);

export const Bill = mongoose.model("Bill", BillSchama);
