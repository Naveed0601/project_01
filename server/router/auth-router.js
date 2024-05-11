const express = require("express");
const register = require("../controller/auth-register");
const login = require("../controller/auth-login");
const user = require("../controller/auth-user");
const authmiddleware = require("../middlewave/auth-middleware");

const router = express.Router();
const { signupschema, loginschema } = require("../validator/auth-validator");
const validate = require("../middlewave/validate-middlewave");

router.get("/", async (req, res) => {
  res.status(200).send("Welcome");
});

router.post("/register", validate(signupschema), register);
router.post("/login", validate(loginschema), login);
router.get("/users", authmiddleware, user);
module.exports = router;
