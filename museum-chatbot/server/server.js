const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const ticketRoutes = require('./routes/ticketRoutes');

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

// MongoDB connection (without deprecated options)
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

app.use(bodyParser.json());
app.use(express.static('public'));

// API routes
app.use('/api', ticketRoutes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
