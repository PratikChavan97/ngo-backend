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

  city: {
    type: String,
    required: [true, "Address is must"],
  },

  dob: {
    type: String,
    required: true,
  },

  duration: {
    type: String,
    required: [true, "Duration is must"],
  },

  isAnswered: {
    type: Boolean,
  },
});

const Volunteer = mongoose.model("Volunteer", volunteerSchema);

export default Volunteer;
