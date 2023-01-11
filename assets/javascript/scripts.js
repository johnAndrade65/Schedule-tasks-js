//Variaveis DOM
let tasksShow = document.getElementById('task-lists');
let tittleTask = document.getElementById('title');
let descriptionTask = document.getElementById('description');
let btnSave = document.getElementById('save-task');

let btnMoreTask = document.querySelector('#more-task');
let displayTaskAdd = document.getElementById('tasks-add');

//Botão aciona tela de adicionar tasks
btnMoreTask.addEventListener('click', () => {
    displayTaskAdd.style.display = 'flex'
    btnMoreTask.style.display = 'none'
});

//Botão salvar Tarefa e fechar tela de adicionar task
btnSave.addEventListener("click", () => {
    displayTaskAdd.style.display = 'none'
    btnMoreTask.style.display = 'flex'

    //Chama a function para renderizar as tarefas
    renderTasks();
});

//Pegar valor do input e textearea, transformar em elemento HTML e renderizar
function renderTasks() {
    const newTaskTitle = tittleTask.value;
    tittleTask.value = ""; 

    const newTaskDescription = descriptionTask.value;
    descriptionTask.value = "";
    
    //Renderizar tarefas
    tasksShow.insertAdjacentHTML("beforeend", 
    `<ul class="tasks-show-list">
        <li class="li-title"> ${newTaskTitle} - Title</li>
        <li class="li-description"> ${newTaskDescription}</li> 
    </ul>`); 
    
}