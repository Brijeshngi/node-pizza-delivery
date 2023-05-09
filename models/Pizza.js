import mongoose from "mongoose";

const schema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  images: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  Type: {
    type: String,
    enum: ["veg", "non-veg"],
  },
  size_crust: [
    {
      type: Array,
    },
  ],
  price: {
    type: String,
    required: true,
  },
});

export const Pizza = mongoose.model("Pizza", schema);
