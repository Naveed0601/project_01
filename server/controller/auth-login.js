const User = require("../models/user_model");
const bcrypt = require("bcryptjs");
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userExits = await User.findOne({ email });
    if (!userExits) {
      return res.status(400).json({ message: "INVALID CREDIENTIAL" });
    }

    const isPasswordValid = await userExits.comparePassword(password);
    if (isPasswordValid) {
      res.status(200).json({
        msg: "User Successful Login",
        token: await userExits.generateToken(),
        // userExits,
        userId: userExits._id.toString(),
      });
    } else {
      res.status(400).json({ message: "Invalid Email or Password" });
    }
  } catch (error) {
    res.status(500).json("internal server error");
  }
};

module.exports = login;
