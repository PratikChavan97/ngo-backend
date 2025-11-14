import express from "express";
import {
  getDoners,
  createDoner,
  deleteDoner,
  getOneDoner,
  updateDoner,
} from "../controllers/donationController.js";

const donationRouter = express.Router();

donationRouter.route("/").get(getDoners).post(createDoner);
donationRouter
  .route("/:id")
  .get(getOneDoner)
  .patch(updateDoner)
  .delete(deleteDoner);

export default donationRouter;
