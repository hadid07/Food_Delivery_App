const express = require('express')
const router = express.Router()
const controller = require('../controllers/controllers')

router.get('/',(req,res)=>{
    res.send('Food Delivery App')
})

router.post('/signup',controller.signup_user)

module.exports = router;