import { Delivery_Boy } from "../models/Delivery_Boy.js";
import ErrorHandler from "../utils/errorHandler.js";

export const addDeleveryBoy = async (req, res, next) => {
  const { name, email, contact } = req.body;

  if (!name || !email || !contact)
    return next(new ErrorHandler("please provide all details", 400));

  await Delivery_Boy.create({
    name,
    email,
    contact,
  });

  res.status(201).json({
    success: true,
    messaage: "added to pizza hut",
  });
};

export const editDeliveryBoy = async (req, res, next) => {
  const { id } = req.params;

  const data = await Delivery_Boy.findById(id);

  if (!data) return next(new ErrorHandler("No data found", 404));

  const { name, email, contact, address, status } = req.body;

  if (!name || !email || !contact || !address || !status)
    return next(new ErrorHandler("please provide all data", 400));

  data.name = name;
  data.email = email;
  data.contact = contact;
  data.address = address;
  data.status = status;

  await data.save();

  res.status(200).json({
    succes: true,
    messaage: "data updated",
  });
};

export const updateStatus = async (req, res, next) => {
  const { id } = req.params;

  const data = await Delivery_Boy.findById(id);

  if (!data) return next(new ErrorHandler("no data found", 400));

  const { assigned_status } = req.body;

  data.assigned_status = assigned_status;

  await data.save();

  res.status(200).json({
    success: true,
    message: "updated",
  });
};

export const orderDelivered = async (req, res, next) => {
  const { id } = req.params;

  const data = await Delivery_Boy.findById(id);

  if (!data) return next(new ErrorHandler("no data found", 404));

  let newData = data.order_delivered;

  res.status(200).json({
    success: true,
    newData,
  });
};
