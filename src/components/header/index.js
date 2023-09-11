import "./index.styl";
import 'font-awesome/css/font-awesome.css';

export default (project) => {
    const header = document.createElement("header");
    const projectTitle = document.createElement("h2");
    const projectDescription = document.createElement("p");
    const toggleNav = document.createElement("div");
    const navIcon = document.createElement("i");

    header.className = "header";
    projectTitle.className = "project-title";
    toggleNav.className = "toggle";
    navIcon.className = "fa fa-navicon";

    projectTitle.textContent = project.title;
    projectDescription.textContent = project.description;
    
    toggleNav.addEventListener('click', () => {
        const navigation = document.querySelector(".navigation");
        console.log(navigation);
        main.classList.toggle('active');
        navigation.classList.toggle('active');
    });

    
    toggleNav.appendChild(navIcon);

    header.appendChild(toggleNav);
    header.appendChild(projectTitle);
    header.appendChild(projectDescription);
    return header;

}
