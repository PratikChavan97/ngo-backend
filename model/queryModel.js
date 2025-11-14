import mongoose from "mongoose";

const querySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A user must have a name"],
  },
  phone: {
    type: Number,
    required: [true, "A user must have a phone number"],
  },
  email: {
    type: String,
    required: [true, "A donor must have an active email"],
    unique: true,
  },
  query: {
    type: String,
    required: true,
  },
  isAnswered: {
    type: Boolean,
  }
});

const Query = mongoose.model("Query", querySchema);

export default Query;
