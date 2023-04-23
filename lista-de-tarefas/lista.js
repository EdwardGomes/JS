//selecionar os elementos//
const inputTarefa = document.querySelector(
  'input[placeholder="adicionar-tarefa"]'
);
const botaoAdicionar = document.querySelector(".add-btn");
const listaDeTarefas = document.querySelector(".todo-list");
const botaoApagar = document.querySelector(".delete-btn");
const botaoApagarTudo = document.querySelector(".clear-btn");
const marcarTudo = document.querySelector(".complete-all-btn");
const botaoConcluir = document.querySelector(".complete-btn");
const botaoDesmarcar = document.querySelector(".unmark-btn");
const botaoDesmarcarTudo = document.querySelector(".desmarcar-btn");

// Função para adicionar tarefas//

function adicionarTarefa() {
  const tarefa = inputTarefa.value;
  if (tarefa) {
    const itemLista = document.createElement("li");
    const textoTarefa = document.createElement("span");
    textoTarefa.classList.add("todo-item");
    textoTarefa.innerText = tarefa;
    itemLista.appendChild(textoTarefa);
    listaDeTarefas.appendChild(itemLista);
    inputTarefa.value = "";
    criarBotaoConcluir(itemLista);
    criarBotaoApagar(itemLista);
    criarBotaoDesmarcar(itemLista);
  } else {
    alert("Por favor, digite uma tarefa!");
  }
}

// Função para apagar tarefas//

function criarBotaoApagar(itemLista) {
  const botaoApagar = document.createElement("button");
  botaoApagar.classList.add("delete-btn");
  botaoApagar.innerText = "Apagar";
  botaoApagar.addEventListener("click", apagarTarefa);
  itemLista.appendChild(botaoApagar);
}

// Função para completar tarefas//

function criarBotaoConcluir(itemLista) {
  const botaoConcluir = document.createElement("button");
  botaoConcluir.classList.add("complete-btn");
    botaoConcluir.innerText = "Concluir";
  botaoConcluir.addEventListener("click", concluirTarefa); 
    itemLista.appendChild(botaoConcluir);
    
}

// Função para apagar tarefas//
function apagarTarefa(event) {
  const itemLista = event.target.parentNode;
  itemLista.remove();
}

// Função para concluir tarefas//
function concluirTarefa(event) {
    const itemLista = event.target.parentNode;
    itemLista.classList.toggle("completed");
}

// Função para apagar todas as tarefas//

function apagarTudo() {
  const itensLista = document.querySelectorAll("li");
  for (let item of itensLista) {
    item.remove();
  }
}

// Função para marcar todas as tarefas//

function marcarTodas() {
  const itensLista = document.querySelectorAll("li");
  for (let item of itensLista) {
    item.classList.add("completed");
  }
}

//criar botao desmarcar Tarefa//

function criarBotaoDesmarcar(itemLista) {
    const botaoDesmarcar = document.createElement('button');
    botaoDesmarcar.classList.add('unmark-btn');
    botaoDesmarcar.innerText = 'Desmarcar';
    botaoDesmarcar.addEventListener('click', desmarcarTarefa);
    itemLista.appendChild(botaoDesmarcar);
}

 // Função para desmarcar tarefas//
function desmarcarTarefa(event) {
    const itemLista = event.target.parentNode;
    itemLista.classList.remove('completed');
}

// Função para desmarcar todas as tarefas//

function desmarcarTodas() { 
    const itensLista = document.querySelectorAll('li');
    for (let item of itensLista) {
        item.classList.remove('completed');
    }
}

// Eventos//
botaoAdicionar.addEventListener("click", adicionarTarefa);
botaoApagarTudo.addEventListener("click", apagarTudo);
marcarTudo.addEventListener("click", marcarTodas);
botaoDesmarcarTudo.addEventListener("click", desmarcarTodas);
