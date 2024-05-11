const User = require("../models/user_model");

const register = async (req, res, next) => {
  try {
    const { username, email, phone, password, isadmin } = req.body;

    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(500).json({ message: "Email Already Exists" });
    }

    const userCreated = await User.create({
      username,
      email,
      phone,
      password,
    });

    res.status(200).json({
      msg: userCreated,
      token: await userCreated.generateToken(),
      userId: userCreated._id.toString(),
    });
  } catch (error) {
    next(error);
  }
};

module.exports = register;
