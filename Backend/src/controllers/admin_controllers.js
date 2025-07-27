const { response } = require("express");
const { rawListeners } = require("../models/items");
const Item = require("../models/items");
const OrderItem = require("../models/order_item");


module.exports.add_item = async(req,res)=>{

   
    try{

        const {item_name,item_amount} = req.body;
        const item_image = req.file.filename;
        
        const item = new Item({
            item_name:item_name,
            item_amount:item_amount,
            item_image:item_image
        })
        const if_exists = await Item.findOne({item_name:item_name});
        if(if_exists){
            return res.json({
                message:'Item already exists ',
                status:false
            })
        }
        
        await item.save();
        res.json({
            item:item,
            message:'item saved',
            status:true
        })
    }
    catch(err){
        console.log(err)
        res.json({
            Error:err,
            message:'internal error',
            status:false
        })
    }
}

module.exports.get_items = async(req,res)=>{
    try{
        
        const items = await Item.find();
        if(!items){
           return res.json({
                message:'No items Found Nothing to show'
            })
        }
        return res.json({
            message:'items fetched successfully',
            items:items

        })
    }catch(err){
        res.json({
            message:'Internal Error Occur'
        })
    }
}

module.exports.delete_item = async(req,res)=>{
    try{

        await Item.findByIdAndDelete(req.params.id);
        return res.json({
            message:'Deleted Successfully',
            status:true
        })
    }catch(err){
        res.json({
            message:'Failed to delete item',
            status:false
        })
    }
}

module.exports.get_all_orders = async(req,res)=>{
    try{
        const orders = await OrderItem.find().populate('userid','f_name address phone').sort({ CreatedAt: -1 });
        if(orders.length === 0){
            return res.json({
                status: false,
                message : "No Orders Yet"
            })
        }
        res.json({
            orders:orders,
            message:"successfully fetched all orders",
            status:true
        })
        
        // console.log(orders);

    }catch(err){
        console.log(err)
        res.json({
            message:"could not fetched orders due to ERROR!!",
            status:false
        })
    }
}
module.exports.update_order_status = async(req,res)=>{
    const orderid = req.params.orderid;
    const newStatus = req.body.status;
    try{

        
        const updatedOrder = await OrderItem.findByIdAndUpdate(orderid,
            {status:newStatus},
            {new:true}
        );
        
        res.json({
            message:`Successfully updated Status to ${newStatus} `,
            status:true,
        })
    }catch(err){
        console.log(err);
        res.json({
            message:"Could not Update Status",
            status:false
        })
    }


}