import mongoose from "mongoose";

const { Schema } = mongoose;

const PaymentSchema = new Schema(
  {
    paymentName: {
      type: String,
      required: true,
    },
    paymentType: {
      type: String,
      required: true,
    },
    paymentAmount: {
      type: String,
      required: true,
    },
    billId: {
      type: String,
      required: true,
    },
    paymentStatus: {
      type: String,
      required: true,
    },
  },
  { timestamps: true, versionKey: false },
);

export const Payment = mongoose.model("Payment", PaymentSchema);
