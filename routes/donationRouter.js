import express from "express";
import { getDoners, createDoner } from "../controllers/donationController.js";

const donationRouter = express.Router();

donationRouter.route("/").get(getDoners).post(createDoner);

export default donationRouter;
