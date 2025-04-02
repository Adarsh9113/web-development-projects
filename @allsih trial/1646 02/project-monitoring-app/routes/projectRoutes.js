// routes/projectRoutes.js
const express = require('express');
const router = express.Router();
const Project = require('../models/Project');

// GET all projects (used in the frontend to display the project list)
router.get('/', async (req, res) => {
    try {
        const projects = await Project.find();
        res.json(projects);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// POST a new project (used to add a new project from the frontend form)
router.post('/', async (req, res) => {
    const project = new Project({
        title: req.body.title,
        projectCode: req.body.projectCode,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        status: req.body.status,
        principalInvestigator: req.body.principalInvestigator,
        fundUtilization: req.body.fundUtilization
    });
    try {
        const newProject = await project.save();
        res.status(201).json(newProject);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
