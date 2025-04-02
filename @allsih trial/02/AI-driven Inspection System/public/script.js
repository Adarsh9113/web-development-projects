// Generating Insights from Form Data
document.getElementById('inspectButton').addEventListener('click', function() {
    const teacher1 = document.getElementById('teacher1').value;
    const teacher2 = document.getElementById('teacher2').value;
    const student1 = parseFloat(document.getElementById('student1').value);
    const student2 = parseFloat(document.getElementById('student2').value);
    const student3 = parseFloat(document.getElementById('student3').value);
  
    // Check if inputs are valid
    if (teacher1 && teacher2 && !isNaN(student1) && !isNaN(student2) && !isNaN(student3)) {
      const avgMarks = ((student1 + student2 + student3) / 3).toFixed(2);
      const insights = `
        <h3>Inspection Insights</h3>
        <p><strong>Teachers' Qualifications:</strong> Mr. Smith: ${teacher1}, Ms. Johnson: ${teacher2}</p>
        <p><strong>Student Average Marks:</strong> John: ${student1}, Sara: ${student2}, Leo: ${student3}</p>
        <p><strong>Overall Student Average Marks:</strong> ${avgMarks}</p>
      `;
  
      document.getElementById('output').innerHTML = insights;
    } else {
      document.getElementById('output').innerHTML = '<p>Please enter valid data for all fields.</p>';
    }
  });
  
  // NLP Analysis
  document.getElementById('nlpAnalyzeButton').addEventListener('click', function() {
    const reportText = document.getElementById('reportInput').value;
    if (reportText) {
      const analysis = `Analyzing report: "${reportText.substring(0, 100)}..." (This is just a placeholder for actual NLP processing.)`;
      document.getElementById('nlpOutput').innerHTML = analysis;
    } else {
      document.getElementById('nlpOutput').innerHTML = '<p>Please paste a report for analysis.</p>';
    }
  });
  