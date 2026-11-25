

const formDuvida = document.getElementById("formDuvida");
const listaMinhasDuvidas = document.getElementById("listaMinhasDuvidas");
const mensagemSucesso = document.getElementById("mensagemSucesso");

const pesquisaPergunta = document.getElementById("pesquisaPergunta");
const perguntas = document.querySelectorAll(".pergunta");
const botoesCategoria = document.querySelectorAll(".categoria");

let categoriaSelecionada = "Todas";

// ABRIR E FECHAR PERGUNTAS

document.querySelectorAll(".pergunta-titulo").forEach(botao => {

    botao.addEventListener("click", () => {

        const pergunta = botao.parentElement;
        pergunta.classList.toggle("aberta");

        const simbolo = botao.querySelector("span");

        simbolo.textContent = pergunta.classList.contains("aberta")
            ? "-"
            : "+";

    });

});

// FILTRAR CATEGORIAS

botoesCategoria.forEach(botao => {

    botao.addEventListener("click", () => {

        botoesCategoria.forEach(item => {
            item.classList.remove("ativa");
        });

        botao.classList.add("ativa");

        categoriaSelecionada = botao.dataset.categoria;

        filtrarPerguntas();

    });

});

// PESQUISAR PERGUNTAS

pesquisaPergunta.addEventListener("input", filtrarPerguntas);

function filtrarPerguntas() {

    const pesquisa = pesquisaPergunta.value.toLowerCase();
    let encontrou = false;

    perguntas.forEach(pergunta => {

        const texto = pergunta.textContent.toLowerCase();
        const categoria = pergunta.dataset.categoria;

        const correspondeCategoria =
            categoriaSelecionada === "Todas" ||
            categoria === categoriaSelecionada;

        const correspondePesquisa = texto.includes(pesquisa);

        if (correspondeCategoria && correspondePesquisa) {
            pergunta.style.display = "block";
            encontrou = true;
        } else {
            pergunta.style.display = "none";
        }

    });

    document.getElementById("nenhumaPergunta").hidden = encontrou;

}

// REGISTRAR DÚVIDA

formDuvida.addEventListener("submit", function(event) {

    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const categoria = document.getElementById("categoria").value;
    const assunto = document.getElementById("assunto").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    if (!nome || !categoria || !assunto || !mensagem) {
        alert("Preencha todos os campos.");
        return;
    }

    const duvidas = JSON.parse(
        localStorage.getItem("duvidas") || "[]"
    );

    const novaDuvida = {
        id: Date.now(),
        nome: nome,
        categoria: categoria,
        assunto: assunto,
        mensagem: mensagem,
        data: new Date().toLocaleDateString("pt-BR")
    };

    duvidas.push(novaDuvida);

    localStorage.setItem("duvidas", JSON.stringify(duvidas));

    formDuvida.reset();

    mensagemSucesso.hidden = false;

    mostrarDuvidas();

    setTimeout(() => {
        mensagemSucesso.hidden = true;
    }, 4000);

});

// MOSTRAR DÚVIDAS REGISTRADAS

function mostrarDuvidas() {

    const duvidas = JSON.parse(
        localStorage.getItem("duvidas") || "[]"
    );

    listaMinhasDuvidas.innerHTML = "";

    if (duvidas.length === 0) {

        listaMinhasDuvidas.innerHTML = `
            <p class="mensagem-vazia">
                Você ainda não registrou nenhuma dúvida.
            </p>
        `;

        return;
    }

    duvidas.slice().reverse().forEach(duvida => {

        const card = document.createElement("div");
        card.className = "duvida-card";

        const titulo = document.createElement("h3");
        titulo.textContent = duvida.assunto;

        const nome = document.createElement("p");
        nome.textContent = "Registrada por: " + duvida.nome;

        const categoria = document.createElement("p");
        categoria.textContent = "Categoria: " + duvida.categoria;

        const mensagem = document.createElement("p");
        mensagem.textContent = duvida.mensagem;

        const data = document.createElement("small");
        data.textContent = "Registrada em: " + duvida.data;

        const acoes = document.createElement("div");
        acoes.className = "acoes-duvida";

        const botaoExcluir = document.createElement("button");
        botaoExcluir.className = "botao-excluir";
        botaoExcluir.textContent = "Excluir dúvida";

        botaoExcluir.addEventListener("click", function() {

            const confirmar = confirm(
                "Deseja realmente excluir esta dúvida?"
            );

            if (confirmar) {
                excluirDuvida(duvida.id);
            }

        });

        acoes.appendChild(botaoExcluir);

        card.appendChild(titulo);
        card.appendChild(nome);
        card.appendChild(categoria);
        card.appendChild(mensagem);
        card.appendChild(data);
        card.appendChild(acoes);

        listaMinhasDuvidas.appendChild(card);

    });

}

// EXCLUIR DÚVIDA

function excluirDuvida(id) {

    const duvidas = JSON.parse(
        localStorage.getItem("duvidas") || "[]"
    );

    const novasDuvidas = duvidas.filter(duvida => duvida.id !== id);

    localStorage.setItem("duvidas", JSON.stringify(novasDuvidas));

    mostrarDuvidas();

}

// CARREGAR DÚVIDAS AO ABRIR A PÁGINA

mostrarDuvidas();
