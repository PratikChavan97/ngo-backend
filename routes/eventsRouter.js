import express from "express";
import {
  createEvent,
  deleteEvent,
  getAllEvents,
  getEvent,
  updateEvent,
} from "../controllers/eventController.js";

const eventRouter = express.Router();

eventRouter.route("/").get(getAllEvents).post(createEvent);
eventRouter.route("/:id").get(getEvent).patch(updateEvent).delete(deleteEvent);

export default eventRouter;
