//VARIAVEIS
let btn = document.querySelector('.button-add');
let task = document.querySelector('.tasks-list');

//QUANDO O BOTÃO FOR CLICADO CHAMARA A ARROW FUCNTION QUE IRÁ CRIAR UMA "TASK" OU "TAREFA" COM VALORES LIMPOS.
btn.addEventListener('click', () => {
    let clone = task.cloneNode(true)
    let body = document.querySelector('.display-tasks')
    body.appendChild(clone)


    //VARIAVEIS QUE SELECIONAM ELEMENTOS PARA CRIAR UM CLONE SEM VALORES NO TíTULO E DESCRIÇÃO.
    let title = document.querySelector('.h3')
    let description = document.querySelector('.p')
    let date = document.querySelector('.date')
    title.value = ''
    description.value = ''
    date.value = ''
});


/*VARIAVEIS*/
let btnRemove = document.querySelector('.remove');
//AINDA EM CONSTRUÇÃO PARA FUTURAS UPDATES <3

/*btnRemove.addEventListener('click', () => {
    clone.parentNode.removeChild();
});*/