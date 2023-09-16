export default class Project {
  constructor(id, name, description) {
    this.id = id
    this.name = name;
    this.description = description;
  }

  editProject(name, description){
    this.name = name;
    this.description = description;
  }
}
