import Events from "../model/eventModel.js";

const getAllEvents = async (req, res) => {
  try {
    const events = await Events.find();

    res.status(200).json({
      message: "Success",
      results: events.length,
      data: {
        events,
      },
    });
  } catch (err) {
    if (err) console.log("Cannot fetch Events");
  }
};

const getEvent = async (req, res) => {
  try {
    const event = await Events.findById(req.params.id);

    res.status(201).json({
      message: "Success",
      data: {
        event,
      },
    });
  } catch (err) {
    if (err) console.log("No event with this id");
  }
};

const createEvent = async (req, res) => {
  try {
    const event = await Events.create(req.body);
    res.staus(200).json({
      message: "Success",
      data: {
        event,
      },
    });
  } catch (err) {
    if (err) console.log("Failed to create an event");
  }
};

const updateEvent = async (req, res) => {
  try {
    const event = await Events.findByIdAndUpdate(req.params.id, req.body);
    res.staus(201).json({
      message: "Success",
      data: {
        event,
      },
    });
  } catch (err) {}
};

const deleteEvent = async (req, res) => {
  try {
    await Events.findByIdAndDelete(req.params.id);
    res.status(203).json({
      message: "Success",
    });
  } catch (err) {
    if (err) console.log("Could not delete this event");
  }
};

export { getAllEvents, getEvent, createEvent, updateEvent, deleteEvent };
