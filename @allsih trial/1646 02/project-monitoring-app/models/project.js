// models/Project.js
const mongoose = require('mongoose');

// Define the schema for a project
const ProjectSchema = new mongoose.Schema({
    title: { type: String, required: true },
    projectCode: { type: String, required: true, unique: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    status: { 
        type: String, 
        enum: ['Pending', 'In Progress', 'Completed'], 
        default: 'Pending' 
    },
    fundUtilization: { type: Number, required: true },
    principalInvestigator: { type: String, required: true },
    // Array to hold related progress reports
    progressReports: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Report'
    }],
    // Message logs for communication between admins and project investigators
    messages: [{
        from: String,
        to: String,
        content: String,
        timestamp: Date
    }]
}, { timestamps: true }); // Automatically add createdAt and updatedAt timestamps

// Export the model so it can be used in other parts of the app
module.exports = mongoose.model('Project', ProjectSchema);
