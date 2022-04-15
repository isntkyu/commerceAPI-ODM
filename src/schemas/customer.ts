import mongoose from "mongoose";

const CustomerSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true
  },
  store: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  }
});

export default CustomerSchema