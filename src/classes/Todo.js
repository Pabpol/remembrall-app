export default class Todo {
  constructor(id, title, description, dueDate, projectId) {
    this.id = id
    this.title = title;
    this.description = description;
    this.status = false;  
    this.dueDate = dueDate;
    this.projectId = projectId;
  }

  toggleStatus() {
    this.status = !this.status;
  }

  updateDueDate(newDueDate) {
    this.dueDate = newDueDate;
  }

  editTodo(title, description, dueDate){
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
  }
}
