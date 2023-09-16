import Todo from '../classes/Todo';

export default () =>{
    let todos = [];
    let data = JSON.parse(localStorage.getItem('todos')) || []
    data.todos.forEach((todo, index) =>{
        const newTodo = new Todo(index+1, todo.title, todo.description, todo.dueDate, todo.projectId);
        todos.push(newTodo);
    });
    return todos
}