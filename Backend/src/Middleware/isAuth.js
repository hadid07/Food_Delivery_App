const jwt = require('jsonwebtoken');

const verify_token = (req,res,next)=>{
    try{

        const token = req.cookies.token;
        if(!token){
            return res.json({token:false,message:'user not logged in'});
        }
        const decoded =  jwt.verify(token,process.env.JWT_SECRET);
        req.user = decoded;
        next();
    }catch{
        return res.json({token:false,message:"token expired or invalid",});
    }
}

module.exports = verify_token;