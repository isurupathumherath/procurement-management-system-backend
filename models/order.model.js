import mongoose from "mongoose";

const { Schema } = mongoose;

const OrderSchema = new Schema({
  orderType: String,
  quantity: Number,
  description: String,
  items: [
    {
      name: String,
      measuringUnit: String,
      quantity: Number,
      available: {
        type: String,
        default: "PENDING",
      },
      deliveredQuantity: Number,
    },
  ],
  approval: {
    type: String,
    default: "PENDING",
  },
  status: {
    type: String,
    default: "PLACED",
  },
  requiredDate: Date,
  manager: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  supplier: {
    type: Schema.Types.ObjectId,
    ref: "Supplier",
  },
  deliveryAddress: String,
  deliveredDate: Date,
  isReceiptPrinted: {
    type: Boolean,
    default: false,
  },
});

export const Order = mongoose.model("Order", OrderSchema);
