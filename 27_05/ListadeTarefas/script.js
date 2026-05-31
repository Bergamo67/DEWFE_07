let contagem = 0;
function adicionar_tarefa() {
    const inputElement = document.getElementById('nova_tarefa');
    const mensagemElement = document.getElementById('mensagem');
    const listaDetarefas = document.getElementById('lista_tarefas');
    const contador = document.getElementById('numtarefas')

    let tarefa = inputElement.value;
    let mensagem, cor;

    if (tarefavalida(tarefa)){
        let novatarefa = document.createElement('li');
        novatarefa.textContent = tarefa;
        listaDetarefas.appendChild(novatarefa);
        contagem++;
        contador.textContent = 'Numero de Tarefas:' + contagem

        mensagem = "Adicionado com sucesso";
        cor = 'green';
}else{
        mensagem = "Tarefa invalida, redigite.";
        cor = 'red';

}
    mensagemElement.textContent = mensagem;
    mensagemElement.style.color = cor;

    inputElement.value = '';
    inputElement.focus();

    function tarefavalida() {
        return tarefa.trim().length >= 5;
    }
}
function limpartarefas(){
   const listaDetarefas = document.getElementById('lista_tarefas');

   if (listaDetarefas.children.length >=1){
    const contador = document.getElementById('numtarefas');
    const mensagemElement = document.getElementById('mensagem');
    
    listaDetarefas.innerHTML = '';
    contagem = 0;
    contador.textContent = 'Numero de tarefas' + contagem
    mensagemElement.textContent = 'Lista limpa!';
    mensagemElement.style.color = 'green';
   }
}

