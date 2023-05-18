import { Order } from "../models/Order.js";
import ErrorHandler from "../utils/errorHandler.js";

export const createOrder = async (req, res, next) => {
  const { user_name, ordered_item, size_crust, price } = req.body;

  if (!user_name || !ordered_item || !size_crust || !price)
    return next(new ErrorHandler("please provide all details"));

  await Order.create({
    user_name,
    ordered_item,
    size_crust,
    price,
  });

  res.status({
    succes: true,
    message: "Order placed",
  });
};

export const orderStatus = async (req, res, next) => {
  const { id } = req.params;

  const data = await Order.findById(id);

  if (!data) return next(new ErrorHandler("no order found", 404));
  const { status } = req.body;

  data.status = status;

  await Order.save();

  res.status(200).json({
    success: true,
    message: `Order ${status}`,
  });
};

export const refundStatus = async (req, res, next) => {
  const { id } = req.params;

  const data = await Order.findById(id);

  if (!data) return next(new ErrorHandler("no order found", 404));
  const { refund_status } = req.body;

  data.refund_status = refund_status;

  await Order.save();

  res.status(200).json({
    success: true,
    message: `Order ${refund_status}`,
  });
};

export const trackOrder = async (req, res, next) => {
  const { id } = req.params;

  const data = await Order.findById(id);

  if (!data) return next(new ErrorHandler("no data found", 404));

  let trackingData = data.tracking_details;

  res.status(200).json({
    success: true,
    trackingData,
  });
};
