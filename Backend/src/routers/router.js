const express = require('express')
const router = express.Router()
const controller = require('../controllers/controllers')
const multer = require('multer');



// Configure multer storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');  // folder where images will be saved
  },
  filename: function (req, file, cb) {
    // Make filename unique: timestamp + original name
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage: storage });


router.get('/',(req,res)=>{
    res.send('Food Delivery App')
})

router.post('/signup',upload.single('image'),controller.signup_user)

module.exports = router;