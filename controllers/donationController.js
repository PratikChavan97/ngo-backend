import Donate from "../model/donationModel.js";

const getDoners = async (req, res) => {
  try {
    const doners = await Donate.find();
    res.status(200).json({
      messaage: "Doners list",
      results: doners.length,
      data: {
        doners,
      },
    });
  } catch (err) {
    if (err) console.log("Error while retrieving Donors");
  }
};

const createDoner = async (req, res) => {
  try {
    await Donate.create(req.body);
    res.status(201).json({
      message: "Doner request created Successfully",
    });
  } catch (err) {
    if (err) console.log("Error creating Doner", err);
  }
};

const getOneDoner = async (req, res) => {
  try {
    const doner = await Donate.findById(req.params.id);
    res.status(200).json({
      message: "Succcess",
      data: doner,
    });
  } catch (err) {
    if (err) console.log("Couldn't get from DB");
  }
};

const updateDoner = async (req, res) => {
  try {
    await Donate.findByIdAndUpdate(req.params.id);
    res.status(200).json({
      message: "Success",
    });
  } catch (err) {
    if (err) console.log("Error");
  }
};

const deleteDoner = async (req, res) => {
  try {
    await Donate.findByIdAndDelete(req.params.id);
    console.log(req.params);
  } catch (err) {
    if (err) console.log("Error deleting doner", err);
  }
};

export { getDoners, createDoner, deleteDoner, getOneDoner, updateDoner };
