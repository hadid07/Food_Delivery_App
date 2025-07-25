const User = require('../models/users');
const CartItem = require('../models/cart_item');
const path = require('path');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const multer = require('multer');


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
      success: true,
      message: "User created successfully"
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Internal server error"
    });
    console.log(error)
  }
};


module.exports.login_user = async (req, res) => {

  const { username, password } = req.body;
  try {

    //--------Finding user-------
    const user = await User.findOne({ email: username });


    // -------if not found ---------
    if (!user) {
      res.json({ message: "User not found ",
        isValid:false
       });
      return;
    }

    // -------verify password------

    const verify_password = await bcrypt.compare(password,user.password);
    


    // ----incorrect password-----
    if(!verify_password){
      res.json({
        message:'correct username but incorrect password',
        isValid:false
      })
      return;
    }


    // ------correct password.... crating JWT-----
     const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "15m"
    });


    res.cookie('token', token, {
      httpOnly: true,
      secure: false,
      sameSite: "Lax",
      maxAge: 60 * 60 * 1000
    }).json({
      token:token,
      message:'Login Successfull',
      verification : verify_password,
      user:user,
      isValid:true
    })

    return;

  } catch (err) {
    
    res.json({ message: 'Internal Error',
      isValid:false
     }

    )
    return;
  }
}


module.exports.is_Auth = async(req,res)=>{
  try{

    const id = req.user._id
    
    const user = await User.findOne({_id:id});
    res.json({token:true,user:user});
    return
  }catch(err){
    console.log(err);
    return res.json({message:"error occured"})
  }
}

module.exports.logout_user = (req,res)=>{
  res.clearCookie('token', {
    httpOnly: true,
    secure: false, 
    sameSite: 'Lax',
    path:'/'
  }).json({
    token:false,
    message:'user logged_out'
  })
}

module.exports.AddToCart = async(req,res)=>{
  const userid = req.user._id;
  const itemid = req.body.itemid;
  const itemName = req.body.itemName;
  const itemAmount = req.body.itemAmount;
  const itemImage = req.body.itemImage;
  // console.log(itemid);
  // alert(itemid)
  try{

    const cartitem = new CartItem({
      userid:userid,
      itemid:itemid,
      itemName:itemName,
      itemAmount:itemAmount,
      itemImage:itemImage

      
    });

    await cartitem.save();
    return res.json({
      message:'item added to cart successfully',
      status:true
    })
  }catch(err){
    return res.json({
      message:'Failed to add item to cart',
      status:false
    })
  }


}
module.exports.showCartItems = async(req,res)=>{
  const userid = req.user._id;
  const result = await CartItem.find({userid:userid});
  try{

    if(!result){
      return res.json({
        items:result,
        message:'Nothing to Show in Cart',
        status:false
      })
    }
    else{
      res.json({
        message:'Cart Item fetched successfully',
        status:true,
        items:result
        
      })
    }
  }catch(err){
    res.json({
      message:'Internal Error Occur',
      status:false
    })
  }
}