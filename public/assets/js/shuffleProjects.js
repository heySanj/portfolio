const projectsContainer = document.getElementById("projectsContainer")
for (let i = projectsContainer.children.length; i >= 0; i--) {
    projectsContainer.appendChild(projectsContainer.children[Math.random() * i | 0]);
}
