import mongoose from "mongoose";

const { Schema } = mongoose;

const OrderNewSchema = new Schema({
  orderType: String,
  description: String,
  itemName: String,
  measuringUnit: String,
  quantity: Number,
  available: {
    type: String,
    default: "PENDING",
  },
  deliveredQuantity: Number,
  approval: {
    type: String,
    default: "PENDING",
  },
  status: {
    type: String,
    default: "PLACED",
  },
  requiredDate: String,
  managerID: {
    type: String,
    default: "Order didn't placed",
  },
  supplierID: {
    type: String,
    default: "Supplier didn't added",
  },
  deliveryAddress: String,

  deliveredDate: {
    type: String,
    default: "date did not added",
  },
  rejectionNote: {
    type: String,
    default: "Order didn't rejected",
  },
  isReceiptPrinted: {
    type: Boolean,
    default: false,
  },
});

export const OrderNew = mongoose.model("OrderNew", OrderNewSchema);
