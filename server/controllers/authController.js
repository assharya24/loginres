// controllers/authController.js
import { User } from "../models/Users.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const signup = async (req, res) => {
  const { name, email, password } = req.body;
  const hash = await bcrypt.hash(password, 10);
  console.log(hash);

  try {
    const user = await User.create({ name, email, password: hash });
    res.status(201).json({ msg: "Signup successful" });
  } catch (err) {
    res.status(400).json({ msg: "User already exists" });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ msg: "Invalid credentials" });
  }
  console.log(user);
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
  res.json({ token, user: { name: user.name, email: user.email } });
};
