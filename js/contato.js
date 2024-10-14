document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita o envio real do formulário

    // Validação básica (os campos já estão com o atributo 'required')
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var assunto = document.getElementById("assunto").value;
    var mensagem = document.getElementById("mensagem").value;

    // Exibe o alerta se todos os campos forem preenchidos
    if (nome && email && assunto && mensagem) {
        alert("Mensagem enviada com sucesso!");
        document.getElementById("contact-form").reset(); // Limpa o formulário após envio
    } else {
        alert("Por favor, preencha todos os campos.");
    }
});