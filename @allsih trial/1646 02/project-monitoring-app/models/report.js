// models/Report.js
const mongoose = require('mongoose');

// Define the schema for a progress report related to a project
const ReportSchema = new mongoose.Schema({
    projectId: { type: mongoose.Schema.Types.ObjectId, ref: 'Project', required: true },
    reportDate: { type: Date, required: true },
    content: { type: String, required: true },
    fundUtilization: { type: Number, required: true },
    status: { type: String, required: true },
    signedDocumentUrl: { type: String, required: true } // Link to uploaded document
}, { timestamps: true });

module.exports = mongoose.model('Report', ReportSchema);
