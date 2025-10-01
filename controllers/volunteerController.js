import Volunteer from "../model/volunteerModel.js";

const getVolunteer = async (req, res) => {
  try {
    const volunteers = await Volunteer.find();
    res.status(200).json({
      message: "Success",
      data: {
        volunteers,
      },
    });
  } catch (err) {
    res.status(400).json({
      message: "Failed to get Volunteers collection",
    });
  }
};

const createVolunteer = async (req, res) => {
  try {
    await Volunteer.create(req.body);
    console.log("Volunteer created");
    res.status(201).json({
      message: "Volunteer created",
      data: {
        volunteer: req.body,
      },
    });
  } catch (err) {
    res.status(400).json({
      message: "Failed to create a new Volunteer",
    });
  }
};

export { getVolunteer, createVolunteer };
