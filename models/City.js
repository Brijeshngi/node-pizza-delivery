import mongoose from "mongoose";

const schema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    Date: Date.now(),
  },
});

export const City = mongoose.model("City", schema);
