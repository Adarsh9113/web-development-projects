// Fetch and display projects
async function loadProjects() {
    const response = await fetch('/api/projects');
    const projects = await response.json();
    const projectList = document.getElementById('projects');
    projectList.innerHTML = ''; // Clear existing list
    projects.forEach(project => {
        const li = document.createElement('li');
        li.textContent = `${project.title} - ${project.status}`;
        projectList.appendChild(li);
    });
}

// Handle form submission to add a new project
document.getElementById('new-project-form').addEventListener('submit', async (e) => {
    e.preventDefault(); // Prevent form from refreshing the page
    const newProject = {
        title: document.getElementById('title').value,
        projectCode: document.getElementById('projectCode').value,
        startDate: document.getElementById('startDate').value,
        endDate: document.getElementById('endDate').value,
        status: document.getElementById('status').value
    };

    await fetch('/api/projects', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newProject)
    });

    // Clear the form
    document.getElementById('new-project-form').reset();
    // Reload the project list
    loadProjects();
});

// Initial load of project data
loadProjects();
