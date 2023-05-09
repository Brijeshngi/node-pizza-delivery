import mongoose from "mongoose";
import validator from "validator";

const schema = mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    validate: validator.isEmail,
  },
  contact: {
    type: String,
  },
  Avatar: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
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
    status: {
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
