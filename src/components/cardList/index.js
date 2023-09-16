import "./index.styl";
import card from "../cards/index"


export default (arrayTodo) => {
    const activeProjectId = parseInt(localStorage.getItem("activeProjectId"));
    console.log(activeProjectId);
    const filteredTodos = arrayTodo.filter(todo => todo.projectId == activeProjectId);
    console.log(filteredTodos);
    const todos = document.createElement("div");
    const todoList = document.createElement("div");
    const listTitle = document.createElement("div");
    todos.className = "todos";
    todoList.className = "todoList";
    listTitle.className = "listTitle";
    listTitle.textContent = "To do"

    filteredTodos.forEach(todo => {
        const cardElement = card(todo);
        todos.appendChild(cardElement);
    });
    todoList.appendChild(listTitle)
    todoList.appendChild(todos);

    return todoList;
}