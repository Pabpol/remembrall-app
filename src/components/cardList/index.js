import './index.styl'
import card from '../cards/index'

export default (arrayTodo) => {
  const todos = document.createElement('div')
  const todoList = document.createElement('div')
  const listTitle = document.createElement('div')
  let filteredTodos

  if (arrayTodo.length === 0) {
    filteredTodos = []
  }

  const activeProjectId = parseInt(localStorage.getItem('activeProjectId'))
  filteredTodos = arrayTodo.filter((todo) => todo.projectId == activeProjectId)

  todos.className = 'todos'
  todoList.className = 'todoList'
  listTitle.className = 'listTitle'
  listTitle.textContent = 'To-Do List'

  if (filteredTodos.length === 0) {
    const emptyState = document.createElement('div')
    emptyState.className = 'emptyState'
    emptyState.textContent = 'No tasks available. Please add some!'
    todoList.appendChild(emptyState)
  } else {
    filteredTodos.forEach((todo) => {
      const cardElement = card(todo)
      todos.appendChild(cardElement)
    })
    todoList.appendChild(listTitle)
    todoList.appendChild(todos)
  }

  return todoList
}
