document.getElementById("formAdocao").addEventListener("submit", function (e) {

    e.preventDefault();

    let nome = document.getElementById("nome").value;

    let email = document.getElementById("email").value;

    let telefone = document.getElementById("telefone").value;

    let cpf = document.getElementById("cpf").value;

    let idade = parseInt(document.getElementById("idade").value);

    let cidade = document.getElementById("cidade").value;

    let estado = document.getElementById("estado").value;

    let termo = document.getElementById("termo").checked;


    if (nome.length < 3) return alert("Nome muito curto");
    if (!email.includes("@")) return alert("Email inválido");
    if (telefone.length < 10) return alert("Telefone inválido");
    if (cpf === "") return alert("CPF é obrigatório");
    if (idade < 16) return alert("Você deve ser maior de 16 anos para doar");
    if (cidade === "") return alert("Por favor informe a cidade");
    if (estado === "") return alert("Por favor informe o estado");
    if (!termo) return alert("Obrigatório aceitar os termos para doar");

    alert("Formulário enviado para análise");

});