import mongoose from "mongoose";
import validator from "validator";

const schema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    validate: validator.isEmail,
  },
  contact: {
    type: String,
    required: true,
  },
  Avatar: {
    public_id: {
      type: String,
    },
    url: {
      type: String,
    },
  },
  address: {
    type: String,
  },
  order_delivered: {
    orderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order",
    },
    order_status: {
      type: String,
    },
  },
  assigned_status: {
    type: String,
    enum: ["YES", "NO"],
  },
  status: {
    type: String,
    enum: ["ACTIVE", "INACTIVE"],
  },
});

export const Delivery_Boy = mongoose.model("Delivery_Boy", schema);
