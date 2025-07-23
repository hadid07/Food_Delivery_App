const mongoose = require('mongoose')

const items_schema = new mongoose.Schema({
    item_name :{
        required :true,
        type:String,
        unique:true

    },
    item_amount :{
        type:Number,
        required:true
    },
    item_image:{
        type:String
    }
})

const Items = mongoose.model('Item',items_schema);

module.exports = Items