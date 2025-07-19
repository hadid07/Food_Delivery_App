const User = require('../models/users');
const path = require('path');

module.exports.signup_user = async (req, res) => {
  try {
    // Text fields come in req.body
    const { f_name, l_name, email, password, phone } = req.body;

    // If user uploaded a file, multer puts file info in req.file
    // If no file uploaded, req.file will be undefined
    let imageFilename = 'default.jpeg'; // your default image filename

    if (req.file) {
      imageFilename = req.file.filename; // use uploaded image filename
    }

    const new_user = new User({
      f_name,
      l_name,
      email,
      password,
      phone,
      image: imageFilename, // save filename or default
    });

    await new_user.save();

    res.status(201).json({
      success:true,
       message: "User created successfully"
     });
  } catch (error) {
    res.status(500).json({ success:false,
      error: "Internal server error" });
    console.log(error)
  }
};
