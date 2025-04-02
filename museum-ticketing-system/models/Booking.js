const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  visitorName: { type: String, required: true },
  language: { type: String, required: true },
  tickets: { type: Number, required: true },
  event: { type: String, required: true },
  paymentStatus: { type: String, default: 'Pending' },
  date: { type: Date, default: Date.now }
});

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;
