document.addEventListener("DOMContentLoaded", function() {
    
    const realTimeData = document.getElementById("realTimeData");
    
    // Simulated real-time data fetch
    setTimeout(() => {
        realTimeData.textContent = "All systems operational!";
    }, 2000);

    // Fetch inspections button click event
    document.getElementById("fetchInspectionsBtn").addEventListener("click", function() {
        const inspectionList = document.getElementById("inspectionList");
        inspectionList.innerHTML = ""; // Clear existing list

        // Fetch inspections from the server
        fetch('/api/inspections')
            .then(response => response.json())
            .then(inspections => {
                inspections.forEach(inspection => {
                    const li = document.createElement("li");
                    li.textContent = `Inspection ${inspection.id} - ${inspection.status}`;
                    inspectionList.appendChild(li);
                });
            })
            .catch(error => console.error('Error fetching inspections:', error));
    });

    // Generate report button click event
    document.getElementById("reportForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission

        const reportInput = document.getElementById("reportInput").value;

        // Simulated report generation
        const reportOutput = document.getElementById("reportOutput");
        reportOutput.innerHTML = `<p>Report generated successfully! Details: ${reportInput}</p>`;
        
        // Clear the input field after generating the report
        document.getElementById("reportInput").value = '';
        
        // Optionally, you could send this data to a server or save it as needed.
        
        console.log('Report generated:', reportInput); // For debugging purposes
    });
});