import express from "express";
import multer from "multer";

import {
  getAllUsers,
  createUser,
  getUser,
  updateUser,
  uploadUserPhoto,
  deleteUser,
} from "../controllers/userController.js";
import { login, signup } from "../controllers/authController.js";

const userRouter = express.Router();

userRouter.route("/signup").post(signup);
userRouter.route("/login").post(login);

userRouter.route("/").get(getAllUsers).post(uploadUserPhoto, createUser);
userRouter.route("/:id").get(getUser).delete(deleteUser).patch(updateUser);

export default userRouter;
