import mongoose from "mongoose";

const donationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A donor must have a name"],
  },
  phone: {
    type: Number,
    required: [true, "A donor must have a phone number"],
  },

  email: {
    type: String,
    required: [true, "A donor must have an active email"],
    unique: true,
  },

  amount: {
    type: Number,
    required: [true, "Please choose what kind of donation you are making"],
  },
  reqStatus: Boolean,
});

const Donate = mongoose.model("Donate", donationSchema);

export default Donate;
