import "./index.styl";

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

    // newTodoButton.addEventListener(onclick, form("todoForm"));
    // newProjectButton.addEventListener(onclick, form("projectForm"));
    
    projectList.forEach(project => {
        const projectLi = document.createElement("li");
        const projectTitle = document.createElement("p");

        projectTitle.className = "title";
        projectTitle.textContent = project.title;
        projectLi.addEventListener('mouseover', activeItem);
        projectLi.addEventListener('mouseout', activeItem);
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

function activeItem(){
    this.classList.toggle('hovered');
}
