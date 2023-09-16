import Project from '../classes/Project';

export default () =>{
    let projects = [];
    let data = JSON.parse(localStorage.getItem('projects')) || []
    data.projects.forEach((project) =>{
        const newProject = new Project(project.id, project.name, project.description);
        projects.push(newProject);
    });
    return projects
}