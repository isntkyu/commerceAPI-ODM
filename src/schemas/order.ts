import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true
  },
  store: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  customer: {
    type: String,
    required: true,
  },
  products: {
    type: [String],
    required: true,
  },
  price : {
    type: Number,
    required: true,
  }
});

export default OrderSchema;