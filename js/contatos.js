
const formContato = document.getElementById("formContato");
const mensagemSucesso = document.getElementById("mensagemSucesso");

formContato.addEventListener("submit", function(event) {

    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const telefone = document.getElementById("telefone").value.trim();
    const assunto = document.getElementById("assunto").value;
    const mensagem = document.getElementById("mensagem").value.trim();

    if (!nome || !assunto || !mensagem) {
        alert("Preencha os campos obrigatórios.");
        return;
    }

    const contatos = JSON.parse(
        localStorage.getItem("mensagensContato") || "[]"
    );

    const novoContato = {
        id: Date.now(),
        nome: nome,
        telefone: telefone,
        assunto: assunto,
        mensagem: mensagem,
        data: new Date().toLocaleString("pt-BR")
    };

    contatos.push(novoContato);

    localStorage.setItem(
        "mensagensContato",
        JSON.stringify(contatos)
    );

    formContato.reset();

    mensagemSucesso.textContent =
        "Mensagem registrada neste navegador. Obrigado pelo contato!";

    mensagemSucesso.hidden = false;

    setTimeout(function() {
        mensagemSucesso.hidden = true;
    }, 5000);

});
