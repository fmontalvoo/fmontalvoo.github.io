async function loadProjects() {
    const response = await fetch('../static/json/projects.json');
    const json = await response.json();

    const table = document.getElementById('projects');

    table.innerHTML = json.projects.map((project, index) => `
        <tr>
            <td>${index + 1}</td>
            <td>${project.title}</td>
            <td>${project.description}</td>
            <td>
                <a href="${project.path}" target="_blank">Ver más</a>
            </td>
        </tr>
    `
    ).join('');

}

document.addEventListener("DOMContentLoaded", function (event) {
    loadProjects();
});