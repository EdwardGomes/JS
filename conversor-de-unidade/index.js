// Seleciona o botão de conversão
const convertBtn = document.querySelector('.convert-btn');

// Seleciona a entrada de temperatura em Fahrenheit
const fahrenheitInput = document.querySelector('.fahrenheit');

// Seleciona a saída de temperatura em Celsius
const celsiusOutput = document.querySelector('.celsius');

// Define a função de conversão de temperatura
function fahrenheitToCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

// Adiciona o evento de clique ao botão de conversão
convertBtn.addEventListener('click', function() {
  // Obtém o valor da temperatura em Fahrenheit
  const fahrenheit = parseFloat(fahrenheitInput.value);

  // Converte a temperatura de Fahrenheit para Celsius
  const celsius = fahrenheitToCelsius(fahrenheit);

  // Exibe a temperatura em Celsius na saída correspondente
  celsiusOutput.value = celsius.toFixed(2);
});