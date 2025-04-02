const mongoose = require('mongoose');

const userResponseSchema = new mongoose.Schema({
  message: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('UserResponse', userResponseSchema);
