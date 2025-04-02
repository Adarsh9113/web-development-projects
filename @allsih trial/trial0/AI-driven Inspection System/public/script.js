document.getElementById("inspectionForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from reloading the page
});

function runInspection() {
    // Get the values from the form
    const infrastructureCondition = parseInt(document.getElementById("infrastructureCondition").value);
    const teacherCount = parseInt(document.getElementById("teacherCount").value);
    const studentCount = parseInt(document.getElementById("studentCount").value);
    const studentAverageMarks = parseInt(document.getElementById("studentAverageMarks").value);

    // Perform basic data validation
    if (infrastructureCondition < 0 || infrastructureCondition > 100 || 
        studentAverageMarks < 0 || studentAverageMarks > 100 || 
        teacherCount <= 0 || studentCount <= 0) {
        document.getElementById("results").innerHTML = `<p>Please provide valid data.</p>`;
        return;
    }

    // Calculate insights
    const studentToTeacherRatio = (studentCount / teacherCount).toFixed(2);
    let performanceAssessment = "Average";
    if (studentAverageMarks >= 80) {
        performanceAssessment = "Excellent";
    } else if (studentAverageMarks >= 60) {
        performanceAssessment = "Good";
    } else if (studentAverageMarks >= 40) {
        performanceAssessment = "Average";
    } else {
        performanceAssessment = "Needs Improvement";
    }

    // Evaluate infrastructure
    let infrastructureAssessment = "Adequate";
    if (infrastructureCondition < 50) {
        infrastructureAssessment = "Needs Improvement";
    }

    // Show results on the page
    document.getElementById("results").innerHTML = `
        <h3>Inspection Results:</h3>
        <p><strong>Infrastructure Condition:</strong> ${infrastructureAssessment}</p>
        <p><strong>Student-Teacher Ratio:</strong> ${studentToTeacherRatio} (Ideal: below 20)</p>
        <p><strong>Student Performance:</strong> ${performanceAssessment}</p>
    `;
}
