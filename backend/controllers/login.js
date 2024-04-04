const User =require("../models/User.js")
const express=require("express")
const bcrypt=require("bcrypt")
const router=express.Router()
const jwt=require("jsonwebtoken")
const login= async (req, res) => {
    const { email, password } = req.body;
  
    // Check if the user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
  
    // Check if the password is correct
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid password' });
    }
  
    // Generate a JWT token
    const token = jwt.sign({ id: user._id }, 'secret_key', { expiresIn: '1h' });
  
    res.json({ message: 'Logged in successfully', token });
  };
   module.exports=login;