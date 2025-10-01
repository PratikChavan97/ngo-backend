import express from "express";
import {
  createVolunteer,
  getVolunteer,
} from "../controllers/volunteerController.js";

const volunteerRouter = express.Router();

volunteerRouter.route("/").get(getVolunteer).post(createVolunteer);

export default volunteerRouter;
