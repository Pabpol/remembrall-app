import "./index.styl";
import 'font-awesome/css/font-awesome.css';

export default (project) => {
    const header = document.createElement("header");
    const projectTitle = document.createElement("h2");
    const projectDescription = document.createElement("p");
    header.className = "header";
    projectTitle.className = "project-title";

    projectTitle.textContent = project.title;
    projectDescription.textContent = project.description;

    header.appendChild(projectTitle);
    header.appendChild(projectDescription);
    return header;

}