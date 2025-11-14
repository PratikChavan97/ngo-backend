import "dotenv/config";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import mongoose from "mongoose";

import userRouter from "./routes/usersRouter.js";
import donationRouter from "./routes/donationRouter.js";
import volunteerRouter from "./routes/volunteerRouter.js";
import galleryRouter from "./routes/galleryRouter.js";
import eventRouter from "./routes/eventsRouter.js";
import queryRouter from "./routes/queryRouter.js";

const app = express();

app.use(morgan("dev"));

app.use(express.json());
app.use(cors());

// All Routes

app.use("/api/v1/users", userRouter);
app.use("/api/v1/donation", donationRouter);
app.use("/api/v1/volunteers", volunteerRouter);
app.use("/api/v1/events", eventRouter);
// app.use("/api/v1/gallery", galleryRouter);
app.use("/api/v1/query", queryRouter);

const port = process.env.PORT;
const hostURL = process.env.HOSTURL;

const cloudDB = process.env.MONGODB.replace(
  "<db_password>",
  process.env.PASSWORDDB
);

const localDB = process.env.LOCALDB;

const connectDB = async () => {
  try {
    await mongoose.connect(localDB);
    console.log("Connected to Atlas");
  } catch (err) {
    console.log("Failed to connect with Atlas");
  }
};
connectDB();

app.listen(port, hostURL, () => {
  console.log(`Server is running on ${port} and ${hostURL}`);
});
