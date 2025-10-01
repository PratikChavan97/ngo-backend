import express from "express";
import { createQuery, getAllQuery } from "../controllers/queryController.js";

const queryRouter = express.Router();

queryRouter.route("/").get(getAllQuery).post(createQuery);

export default queryRouter;
