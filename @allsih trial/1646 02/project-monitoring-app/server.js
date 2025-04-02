// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config(); // Loads environment variables from a .env file

const app = express();

// Middleware to parse incoming requests with JSON payloads
app.use(bodyParser.json());

// Serve static files from the /public directory (for CSS, images, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Importing routes
const projectRoutes = require('./routes/projectRoutes');

// Use the projectRoutes for handling API requests starting with '/api/projects'
app.use('/api/projects', projectRoutes);

// MongoDB connection using Mongoose
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

// Serve the frontend HTML file from the /views folder
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Start the server on a specified port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
