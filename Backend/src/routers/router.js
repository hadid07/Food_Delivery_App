const express = require('express')
const { default: mongoose } = require('mongoose');
const multer = require('multer');
const router = express.Router()
const controller = require('../controllers/controllers')
const is_Auth = require('../Middleware/isAuth');
const upload = require('../Middleware/uploadimage');

// // // Configure multer storage

router.get('/',(req,res)=>{
    res.send('Food Delivery App')
})

router.post('/signup',upload.single('image'),controller.signup_user)
router.post('/login',controller.login_user);
router.get('/isAuth',is_Auth,controller.is_Auth);
router.post('/logout',controller.logout_user);

module.exports = router;