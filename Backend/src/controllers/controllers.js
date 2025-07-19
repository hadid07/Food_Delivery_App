const User = require('../models/users');

module.exports.signup_user = async (req, res) => {
  try {
    const { f_name, l_name, email, password } = req.body;

    const new_user = new User({
      f_name,
      l_name,
      email,
      password,
    });

    await new_user.save();

    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
