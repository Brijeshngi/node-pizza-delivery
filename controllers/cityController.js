import { City } from "../models/City.js";
import "express-async-errors";
import ErrorHandler from "../utils/errorHandler.js";
import { encodeXText } from "nodemailer/lib/shared/index.js";

export const createCity = async (req, res, next) => {
  const { name } = req.body;

  if (!name) return next(new ErrorHandler("enter city name please", 400));

  await City.create({
    name,
  });
  res.status(201).json({
    success: true,
    message: "city created",
  });
};

export const allCity = async (req, res, next) => {
  const data = await City.find({});

  res.status(200).json({
    success: true,
    data,
  });
};

export const updateCity = async (req, res, next) => {
  const { id } = req.params;

  const data = await City.findById(id);

  if (!data) return encodeXText(new ErrorHandler("no data found", 404));

  const { name } = req.body;

  data.name = name;

  await data.save();

  res.status(200).json({
    success: true,
    message: "updated",
  });
};

export const deleteCity = async (req, res, next) => {
  const { id } = req.params;

  const data = await City.findById(id);

  if (!data) return next(new ErrorHandler("no data found", 404));

  await data.deleteOne();

  res.status(200).json({
    success: true,
    message: "deleted",
  });
};
