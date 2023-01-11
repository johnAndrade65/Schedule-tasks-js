//VARIAVEIS
let btn = document.querySelector('.button-add');
let task = document.querySelector('.tasks-list');
let description = document.querySelector('.p')

btn.addEventListener('click', () => {
    //QUANDO O BOTÃO FOR CLICADO CHAMARA A ARROW FUCNTION QUE IRÁ CRIAR UMA "TASK" OU "TAREFA" COM VALORES LIMPOS.
    let clone = task.cloneNode(true)
    let body = document.querySelector('.display-tasks')
    body.appendChild(clone)


    //VARIAVEIS QUE SELECIONAM ELEMENTOS PARA CRIAR UM CLONE SEM VALORES NO TíTULO E DESCRIÇÃO.
    let title = document.querySelector('.h3')
    let date = document.querySelector('.date')

    title.value = ''
    description.value = ''
    date.value = ''
});

//FUNCÃO PARA DAR UM AUTO RESIZE NO PARAGRAFO DA DESCRIÇÃO DA TAREFA(ainda em fase de testes!)
description.addEventListener('input', adjustHeight);

function adjustHeight() {
    let content = this.value;
    const lines = content.split("\n").length;
    this.rows = lines;
}