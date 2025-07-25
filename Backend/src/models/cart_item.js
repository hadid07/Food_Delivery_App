const mongoose = require('mongoose')

const cart_item_schema = mongoose.Schema({
    userid : String,
    itemid : String,
    quantity:{
        type:Number,
        default:1}
})

const cart_item = mongoose.model('CartItem',cart_item_schema);

module.exports = cart_item;