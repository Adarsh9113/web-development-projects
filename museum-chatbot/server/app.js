const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Stripe = require('stripe');
const Booking = require('./models/Booking'); // Booking model
const UserResponse = require('./models/UserResponse'); // UserResponse model
const cors = require('cors');

const app = express();
const stripe = Stripe('your-stripe-secret-key'); // Replace with your Stripe secret key

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB Connection
mongoose.connect('mongodb://localhost/museum_ticket_booking', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Routes

// Booking Route
app.post('/api/book-ticket', async (req, res) => {
  const { visitorName, language, tickets, event } = req.body;

  try {
    const booking = new Booking({ 
      visitorName, 
      language, 
      tickets, 
      event, 
      paymentStatus: 'Pending' 
    });
    await booking.save();
    res.status(201).json({ message: 'Booking created successfully', bookingId: booking._id });
  } catch (error) {
    console.error('Error creating booking:', error);
    res.status(500).json({ error: 'Error creating booking' });
  }
});

// Payment Route (Stripe Integration)
app.post('/api/create-payment-intent', async (req, res) => {
  const { amount } = req.body;

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100, // Stripe works in cents
      currency: 'usd',
    });
    res.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error('Error creating payment:', error);
    res.status(500).json({ error: 'Error creating payment' });
  }
});

// Analytics Route
app.get('/api/analytics', async (req, res) => {
  try {
    const totalBookings = await Booking.countDocuments();
    const successfulPayments = await Booking.countDocuments({ paymentStatus: 'Paid' });
    const pendingPayments = await Booking.countDocuments({ paymentStatus: 'Pending' });

    const bookingPerEvent = await Booking.aggregate([
      { $group: { _id: "$event", totalTickets: { $sum: "$tickets" } } },
    ]);

    res.json({
      totalBookings,
      successfulPayments,
      pendingPayments,
      bookingPerEvent,
    });
  } catch (error) {
    console.error('Error fetching analytics:', error);
    res.status(500).json({ error: 'Error fetching analytics' });
  }
});

// New Endpoint for Recording User Responses
app.post('/api/record-response', async (req, res) => {
  const { userResponse } = req.body;

  try {
    const userResponseRecord = new UserResponse({ response: userResponse });
    await userResponseRecord.save();
    res.status(201).json({ message: 'User response recorded successfully' });
  } catch (error) {
    console.error('Error recording user response:', error);
    res.status(500).json({ error: 'Error recording user response' });
  }
});

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
