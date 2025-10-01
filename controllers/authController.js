import User from "../model/userModel.js";
import jwt from "jsonwebtoken";
import AppError from "./../utils/appError.js";

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

const signup = async (req, res, next) => {
  try {
    const newUser = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      passwordConfirm: req.body.passwordConfirm,
      phone: Number(req.body.phone),
    });

    const token = signToken(newUser._id);

    res.status(201).json({
      message: "User created",
      token,
      data: {
        user: newUser,
      },
    });
    next();
  } catch (err) {
    if (err) console.log("Signup terminated");
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return next(
        new AppError("Please provide with a valid email and password", 400)
      );
    }

    const user = await User.findOne({ email }).select("+password");

    if (!user || !(await user.comparePasswords(password, user.password))) {
      return next(new AppError("Incorrect email or password", 401));
    }

    res.status(200).json({
      message: "Success",
      token: signToken(user._id),
      user,
    });
  } catch (err) {
    if (err) console.log(err.message);
  }
};

export { signup, login, signToken };
