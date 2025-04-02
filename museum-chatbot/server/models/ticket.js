const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
    visitorName: { type: String, required: true },
    language: { type: String, required: true },
    tickets: { type: Number, required: true },
    event: { type: String, required: true },
    bookedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Ticket', ticketSchema);
