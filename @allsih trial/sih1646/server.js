const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public')); // Serve static files from 'public' directory

// Sample endpoint to create a project
let projects = []; // In-memory storage for demonstration

app.post('/api/projects', (req, res) => {
    const project = req.body;
    projects.push(project);
    res.status(201).json({ message: 'Project created successfully', project });
});

// Sample endpoint to get all projects
app.get('/api/projects', (req, res) => {
    res.json(projects);
});

// Sample endpoint for updating project status
app.put('/api/projects/:id', (req, res) => {
    const { id } = req.params;
    const updatedProject = req.body;
    projects[id] = { ...projects[id], ...updatedProject };
    res.json({ message: 'Project updated successfully', project: projects[id] });
});

// Sample endpoint for sending emails (mock)
app.post('/api/send-email', (req, res) => {
    // Here you would integrate an email service
    console.log('Email sent to:', req.body.email);
    res.json({ message: 'Email sent successfully' });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});