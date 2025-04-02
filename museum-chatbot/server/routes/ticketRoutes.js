const express = require('express');
const Ticket = require('../models/Ticket');
const router = express.Router();

// Booking tickets route
router.post('/book-ticket', async (req, res) => {
    const { visitorName, language, tickets, event } = req.body;

    if (!visitorName || !language || !tickets || !event) {
        return res.status(400).json({ message: 'Please provide all required details.' });
    }

    try {
        const newTicket = new Ticket({
            visitorName,
            language,
            tickets,
            event
        });

        await newTicket.save();
        res.status(200).json({ message: 'Booking successful!' });
    } catch (err) {
        res.status(500).json({ message: 'Error booking ticket. Please try again.' });
    }
});

module.exports = router;
