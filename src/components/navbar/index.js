import "./index.styl";

export default projectList =>{
    const navigation = document.createElement("div");
    const formsButtons = document.createElement("div");
    const projects = document.createElement("ul");
    const newProjectButton = document.createElement("p");
    const newTodoButton = document.createElement("p");

    navigation.className = "navigation";

    newProjectButton.textContent = "Add new project";
    newTodoButton.textContent = "Add new to do";

    projectList.forEach(project => {
        const projectLi = document.createElement("li");
        const projectTitle = document.createElement("p");

        projectTitle.className = "title";
        projectTitle.textContent = project.title;

        projectLi.appendChild(projectTitle);
        projects.appendChild(projectLi);
        
    });

    formsButtons.appendChild(newProjectButton);
    formsButtons.appendChild(newTodoButton);

    navigation.appendChild(formsButtons);
    navigation.appendChild(projects);

    return navigation;
}