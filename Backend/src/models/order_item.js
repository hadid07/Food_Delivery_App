const mongoose = require('mongoose')

const order_item_schema = mongoose.Schema({
    userid :{
        type: mongoose.Schema.Types.ObjectId,
        ref : 'User'
    },

    items:[
        {
            itemid:String,
            itemAmount:Number,
            itemName:String,
            quantity:Number
        }
    ],
    status:{
        type:String,
        default:"Pending"
    },
    CreatedAt:{
        type:Date,
        default:Date.now
    }
})

const OrderItem = mongoose.model('OrderItem',order_item_schema);

module.exports = OrderItem;