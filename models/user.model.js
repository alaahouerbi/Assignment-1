const mongoose = require("mongoose");

const userSchema=new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },

  password: {
    type: String,
    required: true,
    trim: true,
  },
  userName: { type: String, required: true, trim: true },
});

module.exports=mongoose.model('user',userSchema);