const mongoose = require('mongoose');

const chatMessageSchema = new mongoose.Schema({
  userMessage: { type: String, required: true },
  chatbotResponse: { type: String, required: true },
  timestamp: { type: Date, default: Date.now }
});

const ChatMessage = mongoose.model('ChatMessage', chatMessageSchema);

module.exports = ChatMessage;
