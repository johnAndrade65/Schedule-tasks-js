//Variaveis DOM
let tasks = [];

//Variaveis DOM
let tasksShow = document.getElementsByClassName('task-lists');
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

    const newTaskTitle = tittleTask.value;
    tasks.push(newTaskTitle);
    tittleTask.value = "";
    
    renderTasks();
});

//Render tarefa
function renderTasks() {
    tasksShow.innerHTML = "";
    tasks.forEach(task => {
        const taskElement = document.createElement("li");
        taskElement.innerHTML = task;
        tasksShow.appendChild(taskElement);
    });
}