import "./index.styl";
import form from "../form/index"

export default projectList =>{
    const navigation = document.createElement("div");
    const formsButtons = document.createElement("div");
    const projects = document.createElement("ul");
    const newProjectButton = document.createElement("button");
    const newTodoButton = document.createElement("button");
    const line = document.createElement("hr");
    const appName = document.createElement("h1");
    
    navigation.className = "navigation";
    formsButtons.className = "forms-buttons";

    newProjectButton.textContent = "New project";
    newTodoButton.textContent = "New To-Do";
    appName.textContent = "Remembrall App";

    newTodoButton.addEventListener("click", () => form("todoForm"));
    newProjectButton.addEventListener("click", () => form("projectForm"));
    
    projectList.forEach(project => {
        const projectLi = document.createElement("li");
        const projectTitle = document.createElement("p");
        project.id == localStorage.getItem("activeProjectId")? projectLi.className = "active":undefined;

        projectLi.setAttribute("id", `project_${project.id}`);

        projectTitle.className = "title";
        projectTitle.textContent = project.name;
        projectLi.addEventListener("mouseover", hoverItem);
        projectLi.addEventListener("mouseout", hoverItem);
        projectLi.addEventListener("click", activeItem);
        projectLi.addEventListener("click", reloadWindow);
        projectLi.appendChild(projectTitle);
        projects.appendChild(projectLi);
        
    });

    formsButtons.appendChild(newProjectButton);
    formsButtons.appendChild(newTodoButton);

    navigation.appendChild(appName);
    navigation.appendChild(formsButtons);
    navigation.appendChild(line);
    navigation.appendChild(projects);

    return navigation;
}

function hoverItem(){
    this.classList.toggle("hovered");
}
function activeItem(){
    document.querySelectorAll("ul > li").forEach(e => e.classList.remove("active"));
    this.classList.toggle("active");
}
function reloadWindow(){
    const projectId = this.id.replace("project_", "");
    localStorage.setItem("activeProjectId", projectId);
    location.reload();
}