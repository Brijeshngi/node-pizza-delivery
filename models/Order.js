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
  size_crust: [{ type: Array }],
  price: {
    type: String,
  },
  date_time: {
    type: Date,
    Date: Date.now(),
  },
  payment_status: {
    type: String,
  },
  status: {
    type: String,
    enum: [
      "pending",
      "confirm",
      "on the way",
      "arriving",
      "delivered",
      "cancelled",
    ],
  },
  refund_status: {
    type: String,
    enum: ["Pending", "refunded", "Cancelled"],
  },
  tracking_details: [{ type: Array }],
  // pointOne, pointTwo, pointThree, ....n => n rows with details
});

export const Order = mongoose.model("Order", schema);
