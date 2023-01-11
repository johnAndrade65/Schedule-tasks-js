//VARIAVEIS DOMtasksShow
let tasksShow = document.getElementById('task-lists');
let tittleTask = document.getElementById('title');
let descriptionTask = document.getElementById('description');
let btnSave = document.getElementById('save-task');

let btnMoreTask = document.querySelector('#more-task');
let displayTaskAdd = document.getElementById('tasks-add');

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
    tasksShow.insertAdjacentHTML("beforeend", 
    `<ul class="tasks-show-list">
        <li class="li-title"> ${newTaskTitle} - Title</li>
        <li class="li-description"> ${newTaskDescription}</li> 
    </ul>`); 
    
}