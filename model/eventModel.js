import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
  heading: {
    type: String,
    required: [true, "An Event must have a heading"],
  },
  photo: {
    type: String,
  },
  para1: {
    type: String,
    required: [true, "An Event must have a description"],
  },
  para2: String,
  para3: String,
});

const Events = mongoose.model("Events", eventSchema);

export default Events;
