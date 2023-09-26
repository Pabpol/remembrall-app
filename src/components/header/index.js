import form from '../form'
import './index.styl'
import 'font-awesome/css/font-awesome.css'

export default (projects) => {
  const header = document.createElement('header')
  const projectTitle = document.createElement('h2')
  const projectDescription = document.createElement('p')
  const toggleNav = document.createElement('div')
  const navIcon = document.createElement('i')
  const titleContainer = document.createElement('div')
  const buttonsContainer = document.createElement('div')
  const editButton = document.createElement('button')
  const deleteButton = document.createElement('button')
  const editIcon = document.createElement('i')
  const deleteIcon = document.createElement('i')

  const activeProjectId = parseInt(localStorage.getItem('activeProjectId'))
  const project = projects.filter((project) => project.id == activeProjectId)[0]

  editIcon.className = 'fa fa-pencil'
  deleteIcon.className = 'fa fa-trash'
  titleContainer.className = 'title'
  buttonsContainer.className = 'buttons'

  header.className = 'header'
  projectTitle.className = 'project-title'
  toggleNav.className = 'toggle'
  navIcon.className = 'fa fa-chevron-left'

  if (!project) {
    projectTitle.textContent = 'No Project Selected'
    projectDescription.textContent =
      'Please select or add a project from the navigation.'
    editButton.disabled = true
    deleteButton.disabled = true
  } else {
    projectTitle.textContent = project.name
    projectDescription.textContent = project.description
    editButton.addEventListener('click', () => {
      form('projectForm', project)
    })
    deleteButton.addEventListener('click', () => deleteProject(activeProjectId))
  }

  toggleNav.addEventListener('click', () => {
    const navigation = document.querySelector('.navigation')
    const main = document.querySelector('#main')
    main.classList.toggle('active')
    navigation.classList.toggle('active')
    navIcon.classList.toggle('fa-chevron-left')
    navIcon.classList.toggle('fa-chevron-right')
  })

  editButton.appendChild(editIcon)
  deleteButton.appendChild(deleteIcon)
  buttonsContainer.appendChild(editButton)
  buttonsContainer.appendChild(deleteButton)
  titleContainer.appendChild(projectTitle)
  titleContainer.appendChild(projectDescription)

  toggleNav.appendChild(navIcon)

  header.appendChild(toggleNav)
  header.appendChild(titleContainer)
  header.appendChild(buttonsContainer)
  return header
}
function deleteProject(projectId) {
  if (!confirm('¿Are you sure you want to delete this project?')) {
    return
  }
  const existingProjects = JSON.parse(localStorage.getItem('projects')) || []
  const newProjects = existingProjects.projects.filter(
    (p) => p.id !== projectId,
  )
  existingProjects.projects = newProjects
  localStorage.setItem('projects', JSON.stringify(existingProjects))
  location.reload()
}
