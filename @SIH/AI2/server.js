const express = require('express');
const app = express();
const port = 3000;

// Serve static files (HTML, CSS, JS)
app.use(express.static('public'));

// Simulated inspection data
const inspections = [
    { id: 1, facility: 'Building A', status: 'Compliant', date: '2024-09-28' },
    { id: 2, facility: 'Building B', status: 'Needs Improvement', date: '2024-09-28' }
];

// Simulated report generation
app.get('/api/generateReport', (req, res) => {
    res.json({ report: 'This is a generated report on institutional inspections.' });
});

// API route to get inspections
app.get('/api/inspections', (req, res) => {
    res.json(inspections);
});

// Start the server
app.listen(port, () => {
    console.log(`AI-driven Inspection System server running at http://localhost:${port}`);
});
