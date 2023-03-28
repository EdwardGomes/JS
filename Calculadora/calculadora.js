// Seleciona todos os botões na página
const buttons = document.querySelectorAll(".btn");
// Seleciona o campo de resultado
const resultado = document.querySelector(".resultado");

// Adiciona um evento de clique a cada botão
buttons.forEach((button) => {
    button.addEventListener("click", () => {
    // Se o botão Apagar for clicado, limpa o campo de resultado
      if (button.classList.contains("apagar")) {
        resultado.value = "";
      }
     // Se o botão de igualdade for clicado, avalia a expressão matemática e exibe o resultado   
      else if (button.classList.contains("igual")) {
        resultado.value = eval(resultado.value);
      }
     // Se nenhum dos botões Apagar ou igualdade forem clicados, adiciona o valor do botão ao campo de resultado
      else {
        resultado.value += button.innerText;
      }
    });
  });
