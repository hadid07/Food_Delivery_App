const express = require('express')
const { default: mongoose } = require('mongoose');
const multer = require('multer');
const router = express.Router()
const controller = require('../controllers/controllers')
const admin_controller = require('../controllers/admin_controllers');
const is_Auth = require('../Middleware/isAuth');
const upload = require('../Middleware/uploadimage');


router.post('/signup',upload.single('image'),controller.signup_user)
router.post('/login',controller.login_user);
router.get('/isAuth',is_Auth,controller.is_Auth);
router.post('/logout',controller.logout_user);
router.post('/add_item',upload.single('image'),admin_controller.add_item);

module.exports = router;