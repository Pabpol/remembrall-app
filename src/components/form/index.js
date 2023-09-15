import "./index.styl";


export default (type) => {
    const main = document.getElementById("main");
    const modal = document.createElement('section');
    const modalContent = document.createElement('section');
    const form = type === "todoForm"? createTodoForm():createProjectForm();


    modal.className = "modal-overlay";
    modalContent.className = "modal-content";

    modalContent.appendChild(form);
    modal.appendChild(modalContent);
    main.appendChild(modal);
    return modal;

}

function createTodoForm() {
    const form = document.createElement('form');
    form.className = 'todo-form';

    // Create title field
    const titleSpan = document.createElement('span');
    titleSpan.className = 'input-span';
    const titleLabel = document.createElement('label');
    titleLabel.setAttribute('for', 'title');
    titleLabel.className = 'label';
    titleLabel.textContent = 'Title';
    const titleInput = document.createElement('input');
    titleInput.setAttribute('type', 'text');
    titleInput.setAttribute('name', 'title');
    titleInput.setAttribute('id', 'title');
    titleSpan.appendChild(titleLabel);
    titleSpan.appendChild(titleInput);

    // Create description field
    const descSpan = document.createElement('span');
    descSpan.className = 'input-span';
    const descLabel = document.createElement('label');
    descLabel.setAttribute('for', 'description');
    descLabel.className = 'label';
    descLabel.textContent = 'Description';
    const descInput = document.createElement('textarea');
    descInput.setAttribute('name', 'description');
    descInput.setAttribute('id', 'description');
    descSpan.appendChild(descLabel);
    descSpan.appendChild(descInput);

    // Create due date field
    const dateSpan = document.createElement('span');
    dateSpan.className = 'input-span';
    const dateLabel = document.createElement('label');
    dateLabel.setAttribute('for', 'dueDate');
    dateLabel.className = 'label';
    dateLabel.textContent = 'Due Date';
    const dateInput = document.createElement('input');
    dateInput.setAttribute('type', 'date');
    dateInput.setAttribute('name', 'dueDate');
    dateInput.setAttribute('id', 'dueDate');
    dateSpan.appendChild(dateLabel);
    dateSpan.appendChild(dateInput);

    // Create submit button
    const submitInput = document.createElement('input');
    submitInput.className = 'submit';
    submitInput.setAttribute('type', 'submit');
    submitInput.setAttribute('value', 'Add Todo');

    // Create close icon
    const closeIcon = document.createElement('i');
    closeIcon.className = 'fa fa-times close-icon';
    closeIcon.addEventListener('click', () => {
        const modal  = document.querySelector(".modal-overlay")
        modal.remove();
    });

    // Append all fields to form
    form.appendChild(closeIcon);
    form.appendChild(titleSpan);
    form.appendChild(descSpan);
    form.appendChild(dateSpan);
    form.appendChild(submitInput);

    return form;
}

function createProjectForm() {
    const form = document.createElement('form');
    form.className = 'todo-form';
  
    // Create title field
    const titleSpan = document.createElement('span');
    titleSpan.className = 'input-span';
    const titleLabel = document.createElement('label');
    titleLabel.setAttribute('for', 'projectTitle');
    titleLabel.className = 'label';
    titleLabel.textContent = 'Project Title';
    const titleInput = document.createElement('input');
    titleInput.setAttribute('type', 'text');
    titleInput.setAttribute('name', 'projectTitle');
    titleInput.setAttribute('id', 'projectTitle');
    titleSpan.appendChild(titleLabel);
    titleSpan.appendChild(titleInput);
  
    // Create description field
    const descSpan = document.createElement('span');
    descSpan.className = 'input-span';
    const descLabel = document.createElement('label');
    descLabel.setAttribute('for', 'projectDescription');
    descLabel.className = 'label';
    descLabel.textContent = 'Project Description';
    const descInput = document.createElement('textarea');
    descInput.setAttribute('name', 'projectDescription');
    descInput.setAttribute('id', 'projectDescription');
    descSpan.appendChild(descLabel);
    descSpan.appendChild(descInput);
  
    // Create close icon
    const closeIcon = document.createElement('i');
    closeIcon.className = 'fa fa-times close-icon';
    closeIcon.addEventListener('click', () => {
        const modal  = document.querySelector(".modal-overlay")
        modal.remove();
    });
  
    // Create submit button
    const submitInput = document.createElement('input');
    submitInput.className = 'submit';
    submitInput.setAttribute('type', 'submit');
    submitInput.setAttribute('value', 'Add Project');
  
    // Append close icon and all fields to form
    form.appendChild(closeIcon);
    form.appendChild(titleSpan);
    form.appendChild(descSpan);
    form.appendChild(submitInput);
  
    return form;
  }
  