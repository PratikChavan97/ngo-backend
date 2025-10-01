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

export { getDoners, createDoner };
