const user = async (req, res) => {
  try {
    const userData = req.user;
    console.log(userData);
    if (!userData) {
      return res.status(404).json({ message: "User data not found" });
    }
    console.log("User Data", userData);
    res.status(200).json({ userData });
  } catch (error) {
    console.error("Error fetching user data:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = user;
