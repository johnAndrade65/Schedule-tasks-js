//VARIAVEIS DOM
let taskList = document.getElementById('task-lists');
let containerLists = document.getElementById('tasks-container');
let tittleTask = document.getElementById('title');
let descriptionTask = document.getElementById('description');
let btnSave = document.getElementById('save-task');

let btnMoreTask = document.querySelector('#more-task');
let displayTaskAdd = document.getElementById('tasks-add');
let btnRemove = document.getElementById('btn-remove');

//VARIABLES
let taskId = 0;

//BOTÃO CHAMA TELA DE ADICIONAR TAREFAS
btnMoreTask.addEventListener('click', () => {
    displayTaskAdd.style.display = 'flex'
    btnMoreTask.style.display = 'none'
});

//BOTÃO SALVA A TAREFA E FECHA A TELA DE ADICIONAR TAREFAS
btnSave.addEventListener("click", () => {
    displayTaskAdd.style.display = 'none'
    btnMoreTask.style.display = 'flex'

    //CHAMA A FUNÇÃO PARA RENDERIZAR AS TAREFAS
    renderTasks();
});

//PEGA O VALOR DO INPUT E TEXTAREA, TRASNFERE A ELEMENTOS "<li>" HTML E ENVIA PARA SER RENDERIZADA
function renderTasks() {
    const newTaskTitle = tittleTask.value;
    tittleTask.value = "";

    const newTaskDescription = descriptionTask.value;
    descriptionTask.value = "";

    //RENDERIZAR AS TAREFAS
    taskList.insertAdjacentHTML("beforeend",
        `<div class="tasks-show-list" data-task-id="${taskId}">
        <ul class="task-lists">
          <li class="li-title"> ${newTaskTitle} - Title</li>
          <li class="li-description"> ${newTaskDescription}</li> 
        </ul>
        <button id="btn-remove" onClick="removeTask(this)">Remove</button>
      </div>`);
      taskId++;
}

//FUNCTION REMOVE TASKS
function removeTask(el) {
    el.closest(".tasks-show-list").remove();
  }