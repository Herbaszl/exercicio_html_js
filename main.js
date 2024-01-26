document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita a submissão tradicional do formulário

    // Obtém os valores dos campos
    var valorA = parseFloat(document.getElementById('campoA').value);
    var valorB = parseFloat(document.getElementById('campoB').value);

    // Seleciona o elemento de mensagem de erro
    var errorElement = document.querySelector('.num-error');

    // Verifica se o número B é maior que o número A
    if (valorB > valorA) {
        // Se for válido, esconde a mensagem de erro (se estiver visível)
        if (!errorElement.classList.contains('hidden')) {
            errorElement.classList.add('hidden');
        }

        // Exibe uma mensagem positiva
        alert("Formulário válido! Número B é maior que o número A.");
    } else {
        // Se for inválido, exibe a mensagem de erro
        errorElement.classList.remove('hidden');
        alert("Formulário inválido! Número B deve ser maior que o número A.");
    }
});