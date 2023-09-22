import "./index.styl";
import "font-awesome/css/font-awesome.css";

export default (projects) => {
    const header = document.createElement("header");
    const projectTitle = document.createElement("h2");
    const projectDescription = document.createElement("p");
    const toggleNav = document.createElement("div");
    const navIcon = document.createElement("i");
    const activeProjectId = parseInt(localStorage.getItem("activeProjectId"));
    const project = projects.filter(project => project.id == activeProjectId)[0];

    header.className = "header";
    projectTitle.className = "project-title";
    toggleNav.className = "toggle";
    navIcon.className = "fa fa-chevron-left";
    projectTitle.textContent = project.name;
    projectDescription.textContent = project.description;
    
    toggleNav.addEventListener("click", () => {
        const navigation = document.querySelector(".navigation");
        main.classList.toggle("active");
        navigation.classList.toggle("active");
        navIcon.classList.toggle("fa-chevron-left");
        navIcon.classList.toggle("fa-chevron-right");
    });

    
    toggleNav.appendChild(navIcon);

    header.appendChild(toggleNav);
    header.appendChild(projectTitle);
    header.appendChild(projectDescription);
    return header;

}
