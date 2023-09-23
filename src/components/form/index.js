import Todo from "../../classes/Todo";
import Project from "../../classes/Project";
import "./index.styl";


export default (type, object) => {
    const main = document.getElementById("main");
    const modal = document.createElement("section");
    const modalContent = document.createElement("section");
    const form = type === "todoForm" ? createTodoForm(object) : createProjectForm(object);

    modal.className = "modal-overlay";
    modalContent.className = "modal-content";

    modalContent.appendChild(form);
    modal.appendChild(modalContent);
    main.appendChild(modal);
    return modal;

}

function createTodoForm(todo) {
    const form = document.createElement("form");
    form.className = "todo-form";

    // Create title field
    const titleSpan = document.createElement("span");
    titleSpan.className = "input-span";
    const titleLabel = document.createElement("label");
    titleLabel.setAttribute("for", "title");
    titleLabel.className = "label";
    titleLabel.textContent = "Title";
    const titleInput = document.createElement("input");
    titleInput.setAttribute("type", "text");
    titleInput.setAttribute("name", "title");
    titleInput.setAttribute("id", "title");
    titleInput.value = todo ? todo.title : "";
    titleSpan.appendChild(titleLabel);
    titleSpan.appendChild(titleInput);

    // Create description field
    const descSpan = document.createElement("span");
    descSpan.className = "input-span";
    const descLabel = document.createElement("label");
    descLabel.setAttribute("for", "description");
    descLabel.className = "label";
    descLabel.textContent = "Description";
    const descInput = document.createElement("textarea");
    descInput.setAttribute("name", "description");
    descInput.setAttribute("id", "description");
    descInput.textContent = todo?.description;
    descSpan.appendChild(descLabel);
    descSpan.appendChild(descInput);

    // Create due date field
    const dateSpan = document.createElement("span");
    dateSpan.className = "input-span";
    const dateLabel = document.createElement("label");
    dateLabel.setAttribute("for", "dueDate");
    dateLabel.className = "label";
    dateLabel.textContent = "Due Date";
    const dateInput = document.createElement("input");
    dateInput.setAttribute("type", "date");
    dateInput.setAttribute("name", "dueDate");
    dateInput.setAttribute("id", "dueDate");
    dateInput.value = todo ? `${todo.dueDate.split("/")[2]}-${todo.dueDate.split("/")[1]}-${todo.dueDate.split("/")[0]}` : "";
    dateSpan.appendChild(dateLabel);
    dateSpan.appendChild(dateInput);

    // Create submit button
    const submitInput = document.createElement("input");
    submitInput.className = "submit";
    submitInput.setAttribute("type", "submit");
    submitInput.value = todo ? "Save" : "Add To-Do";
    submitInput.addEventListener("click", () => {
        todo ? editTodo(todo, titleInput.value, descInput.value, dateInput.value) : addTodo(titleInput.value, descInput.value, dateInput.value);
    });

    // Create close icon
    const closeIcon = document.createElement("i");
    closeIcon.className = "fa fa-times close-icon";
    closeIcon.addEventListener("click", () => {
        const modal = document.querySelector(".modal-overlay")
        modal.remove();
    });

    // Append all fields to form
    form.appendChild(closeIcon);
    form.appendChild(titleSpan);
    form.appendChild(descSpan);
    form.appendChild(dateSpan);
    form.appendChild(submitInput);

    return form;
}

function createProjectForm(object) {
    const form = document.createElement("form");
    form.className = "todo-form";

    // Create title field
    const titleSpan = document.createElement("span");
    titleSpan.className = "input-span";
    const titleLabel = document.createElement("label");
    titleLabel.setAttribute("for", "projectTitle");
    titleLabel.className = "label";
    titleLabel.textContent = "Project Title";
    const titleInput = document.createElement("input");
    titleInput.setAttribute("type", "text");
    titleInput.setAttribute("name", "projectTitle");
    titleInput.setAttribute("id", "projectTitle");
    titleInput.value =object?.name || ""; 
    titleSpan.appendChild(titleLabel);
    titleSpan.appendChild(titleInput);

    // Create description field
    const descSpan = document.createElement("span");
    descSpan.className = "input-span";
    const descLabel = document.createElement("label");
    descLabel.setAttribute("for", "projectDescription");
    descLabel.className = "label";
    descLabel.textContent = "Project Description";
    const descInput = document.createElement("textarea");
    descInput.setAttribute("name", "projectDescription");
    descInput.setAttribute("id", "projectDescription");
    descInput.textContent = object?.description;
    descSpan.appendChild(descLabel);
    descSpan.appendChild(descInput);

    // Create close icon
    const closeIcon = document.createElement("i");
    closeIcon.className = "fa fa-times close-icon";
    closeIcon.addEventListener("click", () => {
        const modal = document.querySelector(".modal-overlay")
        modal.remove();
    });

    // Create submit button
    const submitInput = document.createElement("input");
    submitInput.className = "submit";
    submitInput.setAttribute("type", "submit");
    submitInput.value = object ? "Save" : "Add Project";
    submitInput.addEventListener("click", () => {
        object ? editProject(object, titleInput.value, descInput.value) : addProject(titleInput.value, descInput.value);
    });
    // Append close icon and all fields to form
    form.appendChild(closeIcon);
    form.appendChild(titleSpan);
    form.appendChild(descSpan);
    form.appendChild(submitInput);

    return form;
}

function addTodo(title, description, dueDate) {
    const existingTodos = JSON.parse(localStorage.getItem("todos")) || {todos:[]};
    const activeProjectId = JSON.parse(localStorage.getItem("activeProjectId"));
    const todo = new Todo(existingTodos.todos.length + 1, title, description, false, formatDate(dueDate), activeProjectId)
    existingTodos.todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(existingTodos));

}
function editTodo(updatedTodo, title, description, dueDate) {
    const existingTodos = JSON.parse(localStorage.getItem("todos")) || [];
    const todos = existingTodos.todos;
    const todoIndex = todos.findIndex(todo => todo.id === updatedTodo.id);
    updatedTodo.title = title;
    updatedTodo.description = description;
    updatedTodo.dueDate = formatDate(dueDate);
    
    if (todoIndex !== -1) {
        todos[todoIndex] = updatedTodo;
        existingTodos.todos = todos;
        localStorage.setItem("todos", JSON.stringify(existingTodos));
    }
}
function addProject(title, description) {
    const existingProjects = JSON.parse(localStorage.getItem("projects")) || {projects:[]};
    const project = new Project(existingProjects.projects.slice(-1)[0]?.id+1||1 , title, description)
    existingProjects.projects.push(project);
    localStorage.setItem("projects", JSON.stringify(existingProjects));

}
function editProject(updatedProject, name, description) {
    const existingProjects = JSON.parse(localStorage.getItem("projects")) || {projects:[]};
    const projects = existingProjects.projects;
    const projectIndex = projects.findIndex(p => p.id === updatedProject.id);
    updatedProject.name = name;
    updatedProject.description = description;
    
    if (projectIndex !== -1) {
        projects[projectIndex] = updatedProject;
        existingProjects.projects = projects;
        localStorage.setItem("projects", JSON.stringify(existingProjects));
    }
}

function formatDate(date) {
    const [year, month, day] = date.split("-");
    return `${day}/${month}/${year}`;
}