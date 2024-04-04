const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/User');

// Signup route
const signup= async (req, res) => {
  const { email, password } = req.body;

  // Check if the email is already in use
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(409).json({ message: 'Email already in use' });
  }

  // Hash the password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Create a new user
  const user = new User({ email, password: hashedPassword });
  await user.save();

  res.status(201).json({ message: 'User created successfully' });
};

module.exports =signup