const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public')); // Serve static files from 'public' directory

app.get('/api/inspections', (req, res) => {
    const inspections = [
        { id: 1, status: "Passed" },
        { id: 2, status: "Needs Improvement" },
        { id: 3, status: "Passed" }
    ];
    
    res.json(inspections);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});