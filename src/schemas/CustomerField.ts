import mongoose from "mongoose";

const CustomerFieldSchema = new mongoose.Schema({
  store: {
    type: String,
    required: true,
    unique: true
  },
  signupPhoneUse: {
    type: Boolean,
    required: true,
    default: 0
  },
  signupRequiredPhoneUse: {
    type: Boolean,
    required: true,
    default: 0
  },
  signupAddressUse: {
    type: Boolean,
    required: true,
    default: 0
  },
  signupRequiredAddressUse: {
    type: Boolean,
    required: true,
    default: 0
  },
  signupBirthDateUse: {
    type: Boolean,
    required: true,
    default: 0
  },
  signupRequiredBirthDateUse: {
    type: Boolean,
    required: true,
    default: 0
  },
  signupSexUse: {
    type: Boolean,
    required: true,
    default: 0
  },
  signupRequiredSexUse: {
    type: Boolean,
    required: true,
    default: 0
  },
  signupRecommenderUse: {
    type: Boolean,
    required: true,
    default: 0
  },
  signupRequiredRecommenderUse: {
    type: Boolean,
    required: true,
    default: 0
  }
});

export default mongoose.model('CustomerField', CustomerFieldSchema)