document.getElementById('fetchInspectionsBtn').addEventListener('click', () => {
    fetch('/api/inspections')
        .then(response => response.json())
        .then(data => {
            const result = document.getElementById('result');
            result.innerHTML = `<h3>Inspection Data</h3><p>${JSON.stringify(data)}</p>`;
        })
        .catch(error => console.error('Error fetching inspections:', error));
});

document.getElementById('generateReportBtn').addEventListener('click', () => {
    fetch('/api/generateReport')
        .then(response => response.json())
        .then(data => {
            const result = document.getElementById('result');
            result.innerHTML = `<h3>Generated Report</h3><p>${data.report}</p>`;
        })
        .catch(error => console.error('Error generating report:', error));
});
