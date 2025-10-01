import multer from "multer";
import User from "../model/userModel.js";
import AppError from "../utils/appError.js";

const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/img/users");
  },
  filename: (req, file, cb) => {
    console.log(req.body.name);
    const ext = file.mimetype.split("/")[1];
    cb(null, `user-${Date.now()}.${ext}`);
  },
});

const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb(new AppError(("Not an image! Please upload only images.", 404), false));
  }
};

const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
});

const uploadUserPhoto = upload.single("photo");

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({
      message: "Success",
      result: users.length,
      data: {
        users,
      },
    });
  } catch (err) {
    res.status(400).json({
      message: "Failed to get users",
    });
  }
};

const getUser = async (req, res) => {
  try {
    console.log(req.params.name);
    // const user = await User.find((el) => el.name === req.params.name);
    const user = await User.findById(req.params.id);
    res.status(200).json({
      message: "Success",
      data: {
        user,
      },
    });
  } catch (err) {
    if (err) console.log("Cannot find user with this id");
  }
};

const createUser = async (req, res) => {
  try {
    req.body.photo = req.file?.filename || "public/img/users/default.jpg";
    await User.create(req.body);
    // console.log(req.file);
    // console.log(req.body);
    res.status(201).json({
      message: "Success",
      data: {
        user: req.body,
      },
    });
  } catch (err) {
    res.status(400).json({
      message: err.message,
      data: req.body,
    });
  }
};

const updateUser = async (req, res) => {
  try {
    await User.findByIdAndUpdate(req.params.id, req.body);
    res.status(205).json({
      message: "Updated",
    });
  } catch (err) {
    if (err) console.log("User Update Error");
  }
};

const deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(203).json({
      message: "User Deleted",
    });
  } catch (err) {
    if (err) console.log("Error");
  }
};

export {
  getAllUsers,
  getUser,
  createUser,
  deleteUser,
  updateUser,
  uploadUserPhoto,
};
