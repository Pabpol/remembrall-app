import "./index.styl";
import "font-awesome/css/font-awesome.css";
import form from "../form";
export default (todo) => {
    const card = document.createElement("div");
    card.className = "card";
    card.appendChild(createTitle(todo.title));
    card.appendChild(createBody(todo));
    card.appendChild(createActions(todo));
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
function createBody(todo) {
    const body = document.createElement("div");
    const descriptionElement = document.createElement("p");
    const statusElement = document.createElement("input");
    const dueDateElement = document.createElement("p");
    const checkboxContainer = document.createElement("div");
    body.className = "body";
    checkboxContainer.className = "checkbox-container";
    descriptionElement.textContent = todo.description;
    dueDateElement.textContent = todo.dueDate;
    statusElement.type = "checkbox"
    todo.status?statusElement.checked = true:undefined;
    checkboxContainer.addEventListener("click", () => {
        statusElement.checked = !statusElement.checked;
        updateState(todo)
    })

    body.appendChild(descriptionElement);
    body.appendChild(statusElement);
    body.appendChild(checkboxContainer);
    body.appendChild(dueDateElement);
    return body;
}
function createActions(todo) {
    const actions = document.createElement("div");
    const iconEdit = document.createElement("i")
    const iconDelete = document.createElement("i")
    actions.className = "actions";
    iconEdit.className = "fa fa-pencil";
    iconDelete.className = "fa fa-trash";
    iconEdit.addEventListener("click", () => editTodo(todo));
    iconDelete.addEventListener("click", () => deleteTodo(todo));
    actions.appendChild(iconEdit);
    actions.appendChild(iconDelete);

    return actions;
}
function updateState(todo) {
    todo.toggleStatus()
    const existingTodos = JSON.parse(localStorage.getItem("todos")) || [];
    const todos = existingTodos.todos;
    const todoIndex = todos.findIndex((t) => t.id === todo.id);
    if (todoIndex !== -1) {
        todos[todoIndex] = todo;
        existingTodos.todos = todos;
        localStorage.setItem("todos", JSON.stringify(existingTodos));
    }
}

function editTodo(todo) {
    form("todoForm", todo)
  }
  
  function deleteTodo(todo) {
    if (!confirm("Are you sure you want to delete this TO-DO?")) {
      return;
    }
  
    const existingTodos = JSON.parse(localStorage.getItem("todos")) || [];
    const todos = existingTodos.todos;
    const newTodos = todos.filter(t => t.id !== todo.id);
    existingTodos.todos = newTodos;
    localStorage.setItem("todos", JSON.stringify(existingTodos));
    location.reload();
  
  }