import "./index.styl";
import card from "../cards/index"


export default (arrayTodo) => {
    const todos = document.createElement("div");
    const todoList = document.createElement("div");
    const listTitle = document.createElement("div");
    todos.className = "todos";
    todoList.className = "todoList";
    listTitle.className = "listTitle";
    listTitle.textContent = "To do"

    arrayTodo.forEach(todo => {
        const cardElement = card(todo);
        todos.appendChild(cardElement);
    });
    todoList.appendChild(listTitle)
    todoList.appendChild(todos);

    return todoList;
}