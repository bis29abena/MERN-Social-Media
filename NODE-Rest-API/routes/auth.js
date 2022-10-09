import { Router } from "express";
import User from "../models/User.js";
import bcrypt from "bcrypt";

const route = Router();

//REGISTER
route.post("/register", async (req, res) => {
  try {
    //Generate new password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    //create new user
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });

    //save user and response
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err)
  }
});

//LOGIN
route.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    !user && res.status(404).json("user not found");

    const validPassword = await bcrypt.compare(req.body.password, user.password)
    !validPassword && res.status(404).json("Invalid Password")

    res.status(200).json(user)
  } catch (err) {
    res.status(500).json(err)
  }
});

export default route;