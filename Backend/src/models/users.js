const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const user_schema = new mongoose.Schema({
  f_name: {
    type: String,
    required: true,  
  },
  l_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,    
    required: true,
    unique: true    
  },
  password: {
    type: String,
    required: true,
  }
});


user_schema.pre('save', async function (next) {
    
    if (!this.isModified('password')) return next();
    
    try {
        const salt = await bcrypt.genSalt(10); 
        this.password = await bcrypt.hash(this.password, salt); 
        next();
    } catch (err) {
        next(err);
    }
});


const User = mongoose.model('User', user_schema);
module.exports = User;
