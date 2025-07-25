const { rawListeners } = require("../models/items");
const Item = require("../models/items");

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