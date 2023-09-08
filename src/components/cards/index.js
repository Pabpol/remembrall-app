import "./index.styl";
import 'font-awesome/css/font-awesome.css';

export default (todo) => {
    const card = document.createElement("div");
    card.className = "card";
    card.appendChild(createTitle(todo.title));
    card.appendChild(createBody(todo.description, todo.status, todo.dueDate));
    card.appendChild(createActions());
    return card;
}
function createTitle(cardTitle) {
    const titleContainer = document.createElement("div");
    titleContainer.className = "cardTitle";
    const title = document.createElement("h2");
    title.textContent = cardTitle; 
    titleContainer.appendChild(title);
    return titleContainer;
}
function createBody(description, status, dueDate) {
    const body = document.createElement("div");
    const descriptionElement = document.createElement("p");
    const statusElement = document.createElement("input");
    const dueDateElement = document.createElement("p");
    body.className = "body";
    descriptionElement.textContent = description;
    dueDateElement.textContent = dueDate;
    statusElement.type = "checkbox"
    statusElement.checked = status;
    body.appendChild(descriptionElement);
    body.appendChild(statusElement);
    body.appendChild(dueDateElement);
    return body;
}
function createActions() {
    const actions = document.createElement("div");
    const iconEdit = document.createElement("i")
    const iconDelete = document.createElement("i")
    actions.className = "actions";
    iconEdit.className = "fa fa-pencil";
    iconDelete.className = "fa fa-trash";
    actions.appendChild(iconDelete);
    
    return actions;
}