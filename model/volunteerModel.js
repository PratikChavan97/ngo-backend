import mongoose from "mongoose";

const volunteerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },

  phone: {
    type: Number,
    required: true,
    unique: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  dob: {
    type: String,
    required: true,
  },

  occupation: {
    type: String,
    required: true,
  },

  education: {
    type: String,
    required: true,
  },

  isCertificate: {
    type: Boolean,
    required: true,
  },

  reason: {
    type: String,
    required: true,
  },
});

const Volunteer = mongoose.model("Volunteer", volunteerSchema);

export default Volunteer;
