const User = require("../models/user_model");
const Contact = require("../models/contact_model");

const getallusers = async (req, res, next) => {
  try {
    const users = await User.find({}, { password: 0 });
    //console.log(users);
    if (!users || users.length === 0) {
      return res.status(404).send({ msg: "No user Found" });
    }
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

/* Get Contact user data */

const getallcontacts = async (req, res, next) => {
  try {
    const contacts = await Contact.find();
    if (!contacts || contacts.length === 0) {
      return res.status(404).json({ message: "No contacts found" });
    }
    return res.status(200).json(contacts);
  } catch (error) {
    next(error);
  }
};

/**Edit User Logic */

const getUserById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = await User.findOne({ _id: id }, { password: 0 });
    console.log(data);
    return res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

/*user update logic* */

const updateUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const updateUserData = req.body;
    const updatedData = await User.updateOne(
      { _id: id },
      { $set: updateUserData }
    );
    return res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
  }
};

/**Delete the user data */

const deleteUserById = async (req, res, next) => {
  try {
    const id = req.params.id;
    console.log(id);
    await User.deleteOne({ _id: id });
    return res.status(200).json({ msg: "User deleted successfully" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getallusers,
  getallcontacts,
  deleteUserById,
  getUserById,
  updateUserById,
};
