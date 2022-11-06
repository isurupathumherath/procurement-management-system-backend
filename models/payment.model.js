import mongoose from "mongoose";

const { Schema } = mongoose;

const PaymentSchema = new Schema(
  {
    paymentName: {
      type: String,
      required: false,
    },
    paymentType: {
      type: String,
      required: false,
    },
    paymentAmount: {
      type: String,
      required: false,
    },
    paymentStatus: {
      type: String,
      required: false,
    },
    managerID: {
      type: String,
      required: false,
    },
  },
  { timestamps: true, versionKey: false },
);

export const Payment = mongoose.model("Payment", PaymentSchema);
