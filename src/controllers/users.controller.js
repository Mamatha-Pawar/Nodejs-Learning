const userService = require("../services/users.service");

const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await userService.registerUser(name, email, password);
    console.log("User Created in DB****************:", user); // ✅ Check if user is created in DB

    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const data = await userService.loginUser(email, password);
    res.json(data);
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

const getProfile = async (req, res) => {
  try {
    const user = await userService.getUserProfile(req.user.id);
    res.json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = { register, login, getProfile };
