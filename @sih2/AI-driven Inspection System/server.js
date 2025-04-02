const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public')); // Serve static files from 'public' directory

// Sample endpoint to get inspections
app.get('/api/inspections', (req, res) => {
    const inspections = [
        { id: 1, status: "Passed" },
        { id: 2, status: "Needs Improvement" },
        { id: 3, status: "Passed" }
    ];
    
    res.json(inspections);
});

// Sample endpoint for NLP processing (mock)
app.post('/api/analyze', (req, res) => {
    const { text } = req.body;
    // Simulate NLP analysis (you can integrate actual NLP logic here)
    const analysisResult = {
        keywords: text.split(' ').slice(0, 3), // Just a mock example
        sentiment: "Positive" // Mock sentiment analysis result
    };
    res.json(analysisResult);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});