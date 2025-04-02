const projectList = document.getElementById('projects');
const form = document.getElementById('new-project');

// Fetch and display projects
async function loadProjects() {
    const res = await fetch('/api/projects');
    const data = await res.json();
    data.forEach(project => {
        const li = document.createElement('li');
        li.textContent = `${project.title} - ${project.status}`;
        projectList.appendChild(li);
    });
}

// Add new project
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const newProject = {
        title: formData.get('title'),
        projectCode: formData.get('projectCode'),
        startDate: formData.get('startDate'),
        endDate: formData.get('endDate'),
        status: formData.get('status')
    };
    await fetch('/api/projects', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newProject)
    });
    form.reset();
    projectList.innerHTML = '';
    loadProjects();
});

// Initial load
loadProjects();
