document.getElementById("projectForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    const projectData = {
        title: document.getElementById("projectTitle").value,
        principalInvestigator: document.getElementById("principalInvestigator").value,
        fundingAgency: document.getElementById("fundingAgency").value,
        startDate: document.getElementById("startDate").value,
        completionDate: document.getElementById("completionDate").value,
    };

    // Send data to server to create a new project
    fetch('/api/projects', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(projectData)
    })
        .then(response => response.json())
        .then(data => {
            document.getElementById("createResponse").innerText = data.message;
            loadProjects(); // Reload project list after creation
        })
        .catch(error => console.error('Error:', error));
});

// Function to load projects from the server
function loadProjects() {
    fetch('/api/projects')
        .then(response => response.json())
        .then(data => {
            const projectsList = document.getElementById("projects");
            projectsList.innerHTML = ""; // Clear existing list
            data.forEach((project, index) => {
                const li = document.createElement("li");
                li.textContent = `${index + 1}. ${project.title} - PI: ${project.principalInvestigator}`;
                projectsList.appendChild(li);
            });
        })
        .catch(error => console.error('Error fetching projects:', error));
}

// Load projects on page load
document.addEventListener("DOMContentLoaded", loadProjects);