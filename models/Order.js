import mongoose from "mongoose";

const schema = mongoose.Schema({
  user_name: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  delivery_boy_name: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Delivery_boy",
  },
  ordered_item: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Pizza",
  },
  size_crust: {
    type: String,
  },
  price: {
    type: String,
  },
  date_time: {
    type: Date,
    Date: Date.now(),
  },
  payment_status: {
    type: String,
    enum: ["Pending", "Paid"],
    default: "Pending",
  },
  status: {
    type: String,
    enum: [
      "ordered",
      "confirm",
      "on the way",
      "arriving",
      "delivered",
      "cancelled",
    ],
    default: "ordered",
  },

  refund_status: {
    type: String,
    enum: ["Pending", "refunded", "Cancelled"],
  },

  tracking_details: [{ type: Array }],

  // pointOne, pointTwo, pointThree, ....n => n rows with details
});

export const Order = mongoose.model("Order", schema);
