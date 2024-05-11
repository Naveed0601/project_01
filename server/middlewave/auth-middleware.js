const jwt = require("jsonwebtoken");
const User = require("../models/user_model");

const authmiddleware = async (req, res, next) => {
  const token = req.header("Authorization");
  console.log(token);
  if (!token) {
    return res.status(402).json({ msg: "Unauthorization HTTP , Token dead" });
  }

  const jwtToken = token.replace("Bearer ", "").trim();
  //console.log("token form auth middleware", jwtToken);

  try {
    const isverified = jwt.verify(jwtToken, process.env.JWT_KEY);
    console.log(isverified);

    const userData = await User.findOne({ email: isverified.email }).select({
      password: 0,
    });
    //console.log(userData);
    req.user = userData;
    req.token = token;
    req.userID = userData._id;
    next();
  } catch (error) {
    return res.status(405).json({ message: "Unauthorization token" });
  }
};

module.exports = authmiddleware;
