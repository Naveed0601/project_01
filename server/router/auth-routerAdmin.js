const express = require("express");
const router = express.Router();
const adminController = require("../controller/admin-controller");
const authmiddleware = require("../middlewave/auth-middleware");
const adminMiddleware = require("../middlewave/admin-middleware");

router.get(
  "/users",
  authmiddleware,
  adminMiddleware,
  adminController.getallusers
);
router.get(
  "/contacts",
  authmiddleware,
  adminMiddleware,
  adminController.getallcontacts
);

router.get(
  "/users/:id",
  authmiddleware,
  adminMiddleware,
  adminController.getUserById
);

router.patch(
  "/users/update/:id",
  authmiddleware,
  adminMiddleware,
  adminController.updateUserById
);

router.delete(
  "/users/delete/:id",
  authmiddleware,
  adminMiddleware,
  adminController.deleteUserById
);

module.exports = router;
