
/* =====================================
   PARTE 1 — ELEMENTOS E PROGRESSO
===================================== */

// ELEMENTOS DA PÁGINA

const listaModulos = document.getElementById("listaModulos");
const areaEstudo = document.getElementById("areaEstudo");
const voltarModulos = document.getElementById("voltarModulos");

const identificacaoModulo = document.getElementById("identificacaoModulo");
const nomeEtapa = document.getElementById("nomeEtapa");
const contadorEtapa = document.getElementById("contadorEtapa");
const porcentagemEtapa = document.getElementById("porcentagemEtapa");
const barraEtapa = document.getElementById("barraEtapa");
const conteudoEtapa = document.getElementById("conteudoEtapa");

const perguntaEtapa = document.getElementById("perguntaEtapa");
const textoPerguntaEtapa = document.getElementById("textoPerguntaEtapa");
const opcoesPerguntaEtapa = document.getElementById("opcoesPerguntaEtapa");
const resultadoEtapa = document.getElementById("resultadoEtapa");
const concluirEtapa = document.getElementById("concluirEtapa");

const quizModulo = document.getElementById("quizModulo");
const questoesQuiz = document.getElementById("questoesQuiz");
const corrigirQuiz = document.getElementById("corrigirQuiz");
const resultadoQuiz = document.getElementById("resultadoQuiz");

const conclusaoCurso = document.getElementById("conclusaoCurso");
const iniciarProva = document.getElementById("iniciarProva");
const areaProva = document.getElementById("areaProva");
const questoesProva = document.getElementById("questoesProva");
const corrigirProva = document.getElementById("corrigirProva");
const resultadoProva = document.getElementById("resultadoProva");

const areaCertificado = document.getElementById("areaCertificado");
const nomeCertificado = document.getElementById("nomeCertificado");
const gerarCertificado = document.getElementById("gerarCertificado");

const certificadoImpresso = document.getElementById("certificadoImpresso");
const nomeAlunoImpresso = document.getElementById("nomeAlunoImpresso");


// SALVAR PROGRESSO

const chaveProgresso = "progressoAutomacaoNaPratica";

const progressoPadrao = {
    etapas: {},
    quizzes: {},
    provaAprovada: false,
    nomeAluno: ""
};

let progresso = progressoPadrao;

try {

    const dadosSalvos = JSON.parse(
        localStorage.getItem(chaveProgresso)
    );

    if (dadosSalvos && typeof dadosSalvos === "object") {

        progresso = {
            ...progressoPadrao,
            ...dadosSalvos,
            etapas: dadosSalvos.etapas || {},
            quizzes: dadosSalvos.quizzes || {}
        };

    }

} catch (erro) {

    console.warn("Erro ao carregar o progresso.", erro);

}


// VARIÁVEIS DO CURSO

let moduloAtual = 0;
let etapaAtual = 0;
let respostaEtapaCorreta = false;


// FUNÇÕES DE PROGRESSO

function salvarProgresso() {

    localStorage.setItem(
        chaveProgresso,
        JSON.stringify(progresso)
    );

}

function chaveEtapa(modulo, etapa) {

    return `${modulo}-${etapa}`;

}

function etapaConcluida(modulo, etapa) {

    return progresso.etapas[chaveEtapa(modulo, etapa)] === true;

}

function quizAprovado(indice) {

    return progresso.quizzes[indice] === true;

}

function todasEtapasConcluidas(indice) {

    return modulos[indice].etapas.every((_, etapa) =>
        etapaConcluida(indice, etapa)
    );

}

function moduloConcluido(indice) {

    return todasEtapasConcluidas(indice) &&
           quizAprovado(indice);

}

function cursoConcluido() {

    return modulos.every((_, indice) =>
        moduloConcluido(indice)
    );

}


// ATUALIZAR PROGRESSO GERAL

function atualizarProgresso() {

    const total = modulos.reduce(
        (soma, modulo) => soma + modulo.etapas.length,
        0
    );

    const concluidas = Object.values(progresso.etapas)
        .filter(Boolean).length;

    const porcentagem = total > 0
        ? Math.round((concluidas / total) * 100)
        : 0;

    document.getElementById("porcentagemGeral").textContent =
        porcentagem + "%";

    document.getElementById("barraGeral").style.width =
        porcentagem + "%";

    document.getElementById("etapasConcluidas").textContent =
        concluidas;

    const quantidadeModulos = modulos.filter((_, indice) =>
        moduloConcluido(indice)
    ).length;

    document.getElementById("modulosConcluidos").textContent =
        quantidadeModulos;

    document.getElementById("barraGeralAcessivel")
        .setAttribute("aria-valuenow", porcentagem);

}


// MOSTRAR MÓDULOS

/* =====================================
   MOSTRAR OS MÓDULOS NA TELA
===================================== */

function atualizarModulos() {

    listaModulos.innerHTML = "";

    modulos.forEach((modulo, indice) => {

        const liberado =
            indice === 0 || quizAprovado(indice - 1);

        const concluido = moduloConcluido(indice);

        const card = document.createElement("div");

        card.className = "card-modulo";

        const titulo = document.createElement("h3");

        titulo.textContent = modulo.titulo;

        const descricao = document.createElement("p");

        descricao.textContent = modulo.descricao || "";

        const horas = document.createElement("p");

        horas.textContent = modulo.horas || "";

        const status = document.createElement("span");

        status.className = "status";

        if (concluido) {

            status.textContent = "Concluído";

        } else if (liberado) {

            status.textContent = "Disponível";

        } else {

            status.textContent = "Bloqueado";
        }

        const botao = document.createElement("button");

        botao.type = "button";
        botao.className = "botao";

        if (concluido) {

            botao.textContent = "Revisar módulo";

        } else if (liberado) {

            botao.textContent = "Iniciar módulo";

        } else {

            botao.textContent = "Módulo bloqueado";
            botao.disabled = true;
        }

        if (liberado) {

            botao.addEventListener("click", function () {
                abrirModulo(indice);
            });
        }

        card.appendChild(titulo);
        card.appendChild(descricao);
        card.appendChild(horas);
        card.appendChild(status);
        card.appendChild(botao);

        listaModulos.appendChild(card);
    });

    atualizarProgresso();
}

// ABRIR MÓDULO

function abrirModulo(indice) {

    if (indice < 0 || indice >= modulos.length) {
        return;
    }

    moduloAtual = indice;

    listaModulos.hidden = true;
    areaEstudo.hidden = false;

    quizModulo.hidden = true;
    perguntaEtapa.hidden = false;

    identificarProximaEtapa();

}


// VOLTAR PARA A LISTA DE MÓDULOS

function voltarParaModulos() {

    areaEstudo.hidden = true;
    listaModulos.hidden = false;

    quizModulo.hidden = true;
    perguntaEtapa.hidden = false;

    atualizarModulos();

}

voltarModulos.addEventListener("click", voltarParaModulos);


// INICIAR O CURSO

function iniciarCurso() {

    atualizarModulos();

    conclusaoCurso.hidden = !cursoConcluido();

    if (progresso.provaAprovada) {

        areaCertificado.hidden = false;

        nomeCertificado.value =
            progresso.nomeAluno || "";

    }

    if (progresso.provaAprovada && progresso.nomeAluno) {

        nomeAlunoImpresso.textContent =
            progresso.nomeAluno;

        certificadoImpresso.hidden = false;

    }

}



/* =====================================
   ETAPAS E PERGUNTAS DO MÓDULO
===================================== */

// Obtém o texto da pergunta
function obterPergunta(item) {
    if (Array.isArray(item)) {
        return item[0];
    }

    return item.pergunta || item.tituloPergunta || "";
}

// Obtém as alternativas
function obterOpcoes(item) {
    if (Array.isArray(item)) {
        return item[1] || [];
    }

    return item.opcoes || [];
}

// Obtém a resposta correta
function obterRespostaCorreta(item) {
    if (Array.isArray(item)) {
        return item[2];
    }

    return item.resposta ?? item.correta;
}

// Obtém o conteúdo da etapa
function obterTextoEtapa(etapa) {
    return etapa.texto ?? etapa.conteudo ?? "";
}

// Obtém o título da etapa
function obterTituloEtapa(etapa) {
    return etapa.subtitulo || etapa.titulo || "Etapa do módulo";
}


/* =====================================
   IDENTIFICAR A PRÓXIMA ETAPA
===================================== */

function identificarProximaEtapa() {

    const modulo = modulos[moduloAtual];

    if (!modulo) {
        return;
    }

    for (let i = 0; i < modulo.etapas.length; i++) {

        if (!etapaConcluida(moduloAtual, i)) {
            renderizarEtapa(i);
            return;
        }
    }

    // Todas as etapas foram concluídas
    mostrarQuiz();
}


/* =====================================
   EXIBIR UMA ETAPA
===================================== */

function renderizarEtapa(indiceEtapa) {

    const modulo = modulos[moduloAtual];

    if (!modulo || !modulo.etapas[indiceEtapa]) {
        return;
    }

    etapaAtual = indiceEtapa;

    const etapa = modulo.etapas[indiceEtapa];

    areaEstudo.hidden = false;
    quizModulo.hidden = true;
    conclusaoCurso.hidden = true;

    perguntaEtapa.hidden = false;

    identificacaoModulo.textContent = modulo.titulo;

    nomeEtapa.textContent = obterTituloEtapa(etapa);

    contadorEtapa.textContent =
        `Etapa ${indiceEtapa + 1} de ${modulo.etapas.length}`;

    const percentual =
        ((indiceEtapa + 1) / modulo.etapas.length) * 100;

    porcentagemEtapa.textContent =
        `${Math.round(percentual)}%`;

    barraEtapa.style.width = `${percentual}%`;

    // Exibir conteúdo da etapa
    const textoEtapa = obterTextoEtapa(etapa);

    conteudoEtapa.innerHTML = textoEtapa;

    // Exibir imagem, caso exista
    if (etapa.imagem) {

        const imagem = document.createElement("img");

        imagem.src = etapa.imagem;
        imagem.alt = obterTituloEtapa(etapa);
        imagem.className = "imagem-etapa";

        conteudoEtapa.prepend(imagem);
    }

    // Exibir pergunta
    textoPerguntaEtapa.textContent =
        obterPergunta(etapa);

    // Limpar alternativas anteriores
    opcoesPerguntaEtapa.innerHTML = "";

    resultadoEtapa.textContent = "";
    resultadoEtapa.className = "resultado";

    concluirEtapa.disabled = false;
    concluirEtapa.textContent = "Verificar resposta";

    // Criar alternativas
    const opcoes = obterOpcoes(etapa);

    opcoes.forEach((opcao, indice) => {

        const label = document.createElement("label");

        label.className = "opcao-pergunta";

        const input = document.createElement("input");

        input.type = "radio";
        input.name = "respostaEtapa";
        input.value = indice;

        const texto = document.createElement("span");

        texto.textContent = opcao;

        label.appendChild(input);
        label.appendChild(texto);

        opcoesPerguntaEtapa.appendChild(label);
    });

    atualizarProgresso();
}


/* =====================================
   VERIFICAR RESPOSTA DA ETAPA
===================================== */

function verificarEtapa() {

    const modulo = modulos[moduloAtual];
    const etapa = modulo.etapas[etapaAtual];

    const selecionada = document.querySelector(
        'input[name="respostaEtapa"]:checked'
    );

    if (!selecionada) {

        resultadoEtapa.textContent =
            "Selecione uma alternativa antes de continuar.";

        resultadoEtapa.className = "resultado erro";

        return;
    }

    const resposta = Number(selecionada.value);

    const correta = obterRespostaCorreta(etapa);

    // Aceita resposta correta como índice ou texto
    const acertou =
        Number(correta) === resposta ||
        String(correta).trim().toLowerCase() ===
        String(obterOpcoes(etapa)[resposta]).trim().toLowerCase();

    if (!acertou) {

        resultadoEtapa.textContent =
            etapa.explicacao ||
            "Resposta incorreta. Tente novamente.";

        resultadoEtapa.className = "resultado erro";

        return;
    }

    // Registrar etapa concluída
    progresso.etapas[chaveEtapa(moduloAtual, etapaAtual)] = true;

    salvarProgresso();

    atualizarProgresso();

    // Desativar alternativas após acertar
    document.querySelectorAll(
        'input[name="respostaEtapa"]'
    ).forEach(input => {
        input.disabled = true;
    });

    resultadoEtapa.textContent =
        etapa.explicacao ||
        "Muito bem! Você concluiu esta etapa.";

    resultadoEtapa.className = "resultado sucesso";

    concluirEtapa.textContent =
        etapaAtual === modulo.etapas.length - 1
            ? "Ir para o quiz do módulo"
            : "Próxima etapa";

    // Avançar somente quando clicar no botão
    concluirEtapa.onclick = function () {

        if (etapaAtual === modulo.etapas.length - 1) {

            mostrarQuiz();

        } else {

            identificarProximaEtapa();
        }
    };
}


/* =====================================
   EXIBIR O QUIZ DO MÓDULO
===================================== */

function mostrarQuiz() {

    const modulo = modulos[moduloAtual];

    if (!modulo) {
        return;
    }

    // Conferir se todas as etapas foram concluídas
    if (!todasEtapasConcluidas(moduloAtual)) {

        identificarProximaEtapa();
        return;
    }

    perguntaEtapa.hidden = true;
    quizModulo.hidden = false;

    resultadoQuiz.textContent = "";
    resultadoQuiz.className = "resultado";

    questoesQuiz.innerHTML = "";

    const perguntas = modulo.quiz || [];

    perguntas.forEach((questao, indice) => {

        const pergunta = document.createElement("div");

        pergunta.className = "questao-quiz";

        const titulo = document.createElement("p");

        titulo.textContent =
            `${indice + 1}. ${obterPergunta(questao)}`;

        pergunta.appendChild(titulo);

        const opcoes = obterOpcoes(questao);

        opcoes.forEach((opcao, indiceOpcao) => {

            const label = document.createElement("label");

            label.className = "opcao-pergunta";

            const input = document.createElement("input");

            input.type = "radio";
            input.name = `quiz-${indice}`;
            input.value = indiceOpcao;

            const texto = document.createElement("span");

            texto.textContent = opcao;

            label.appendChild(input);
            label.appendChild(texto);

            pergunta.appendChild(label);
        });

        questoesQuiz.appendChild(pergunta);
    });

    corrigirQuiz.disabled = false;
    corrigirQuiz.textContent = "Corrigir quiz";
}


/* =====================================
   CORRIGIR QUIZ DO MÓDULO
===================================== */

function corrigirQuizModulo() {

    const modulo = modulos[moduloAtual];

    const perguntas = modulo.quiz || [];

    if (perguntas.length === 0) {

        resultadoQuiz.textContent =
            "Este módulo ainda não possui perguntas cadastradas.";

        resultadoQuiz.className = "resultado erro";

        return;
    }

    let acertos = 0;

    for (let i = 0; i < perguntas.length; i++) {

        const selecionada = document.querySelector(
            `input[name="quiz-${i}"]:checked`
        );

        if (!selecionada) {

            resultadoQuiz.textContent =
                "Responda todas as perguntas antes de corrigir.";

            resultadoQuiz.className = "resultado erro";

            return;
        }

        const resposta = Number(selecionada.value);

        const correta = obterRespostaCorreta(perguntas[i]);

        const acertou =
            Number(correta) === resposta ||
            String(correta).trim().toLowerCase() ===
            String(obterOpcoes(perguntas[i])[resposta]).trim().toLowerCase();

        if (acertou) {
            acertos++;
        }
    }

    const percentual = Math.round(
        (acertos / perguntas.length) * 100
    );

    if (percentual >= 70) {

        progresso.quizzes[moduloAtual] = true;

        salvarProgresso();

        atualizarProgresso();
        atualizarModulos();

        resultadoQuiz.textContent =
            `Parabéns! Você acertou ${acertos} de ${perguntas.length} questões (${percentual}%). Módulo concluído!`;

        resultadoQuiz.className = "resultado sucesso";

        corrigirQuiz.disabled = true;

        // Criar botões de navegação
        const navegacao = document.createElement("div");

        navegacao.className = "navegacao-quiz";

        const botaoVoltar = document.createElement("button");

        botaoVoltar.type = "button";
        botaoVoltar.className = "botao";
        botaoVoltar.textContent = "Voltar aos módulos";

        botaoVoltar.onclick = voltarParaModulos;

        navegacao.appendChild(botaoVoltar);

        // Liberar próximo módulo, se existir
        if (moduloAtual < modulos.length - 1) {

            const botaoProximo = document.createElement("button");

            botaoProximo.type = "button";
            botaoProximo.className = "botao";
            botaoProximo.textContent = "Próximo módulo";

            botaoProximo.onclick = function () {
                abrirModulo(moduloAtual + 1);
            };

            navegacao.appendChild(botaoProximo);
        }

        resultadoQuiz.appendChild(navegacao);

    } else {

        resultadoQuiz.textContent =
            `Você acertou ${acertos} de ${perguntas.length} questões (${percentual}%). É necessário alcançar 70% para concluir. Tente novamente.`;

        resultadoQuiz.className = "resultado erro";
    }
}




/* =====================================
   PROVA FINAL DO CURSO
===================================== */

function mostrarProvaFinal() {

    areaEstudo.hidden = true;
    conclusaoCurso.hidden = false;
    areaProva.hidden = false;
    areaCertificado.hidden = true;

    questoesProva.innerHTML = "";

    resultadoProva.textContent = "";
    resultadoProva.className = "resultado";

    const perguntas = provaFinal || [];

    perguntas.forEach((questao, indice) => {

        const bloco = document.createElement("div");
        bloco.className = "questao-quiz";

        const titulo = document.createElement("p");

        titulo.textContent =
            `${indice + 1}. ${obterPergunta(questao)}`;

        bloco.appendChild(titulo);

        const opcoes = obterOpcoes(questao);

        opcoes.forEach((opcao, indiceOpcao) => {

            const label = document.createElement("label");
            label.className = "opcao-pergunta";

            const input = document.createElement("input");

            input.type = "radio";
            input.name = `prova-${indice}`;
            input.value = indiceOpcao;

            const texto = document.createElement("span");
            texto.textContent = opcao;

            label.appendChild(input);
            label.appendChild(texto);

            bloco.appendChild(label);
        });

        questoesProva.appendChild(bloco);
    });

    corrigirProva.disabled = false;
    corrigirProva.textContent = "Corrigir prova";
}


/* =====================================
   CORRIGIR PROVA FINAL
===================================== */

function corrigirProvaFinal() {

    const perguntas = provaFinal || [];

    if (perguntas.length === 0) {

        resultadoProva.textContent =
            "A prova final ainda não possui questões cadastradas.";

        resultadoProva.className = "resultado erro";

        return;
    }

    let acertos = 0;

    for (let i = 0; i < perguntas.length; i++) {

        const selecionada = document.querySelector(
            `input[name="prova-${i}"]:checked`
        );

        if (!selecionada) {

            resultadoProva.textContent =
                "Responda todas as questões antes de corrigir.";

            resultadoProva.className = "resultado erro";

            return;
        }

        const resposta = Number(selecionada.value);

        const correta = obterRespostaCorreta(perguntas[i]);

        const acertou =
            Number(correta) === resposta ||
            String(correta).trim().toLowerCase() ===
            String(obterOpcoes(perguntas[i])[resposta]).trim().toLowerCase();

        if (acertou) {
            acertos++;
        }
    }

    const percentual = Math.round(
        (acertos / perguntas.length) * 100
    );

    if (percentual >= 70) {

        progresso.provaAprovada = true;

        salvarProgresso();

        resultadoProva.textContent =
            `Parabéns! Você acertou ${acertos} de ${perguntas.length} questões (${percentual}%). Você foi aprovado na prova final!`;

        resultadoProva.className = "resultado sucesso";

        corrigirProva.disabled = true;

        areaCertificado.hidden = false;

    } else {

        resultadoProva.textContent =
            `Você acertou ${acertos} de ${perguntas.length} questões (${percentual}%). É necessário alcançar 70% para ser aprovado. Tente novamente.`;

        resultadoProva.className = "resultado erro";
    }
}


/* =====================================
   GERAR CERTIFICADO
===================================== */

function gerarCertificadoCurso() {

    const nome = nomeCertificado.value.trim();

    if (nome.length < 3) {

        alert("Digite seu nome completo para gerar o certificado.");

        return;
    }

    if (!progresso.provaAprovada) {

        alert("Você precisa ser aprovado na prova final.");

        return;
    }

    progresso.nomeAluno = nome;

    salvarProgresso();

    nomeAlunoImpresso.textContent = nome;

    certificadoImpresso.hidden = false;

    window.print();
}


/* =====================================
   ATUALIZAR CONCLUSÃO DO CURSO
===================================== */

function atualizarConclusaoCurso() {

    if (cursoConcluido()) {

        conclusaoCurso.hidden = false;

        areaEstudo.hidden = true;
        areaProva.hidden = true;

        iniciarProva.hidden = false;

        if (progresso.provaAprovada) {

            areaCertificado.hidden = false;

        } else {

            areaCertificado.hidden = true;
        }

    } else {

        conclusaoCurso.hidden = true;
    }
}


/* =====================================
   EVENTOS DOS BOTÕES
===================================== */

// Verificar resposta da etapa
concluirEtapa.onclick = verificarEtapa;

// Corrigir quiz do módulo
corrigirQuiz.onclick = corrigirQuizModulo;

// Voltar para a lista de módulos
voltarModulos.onclick = voltarParaModulos;

// Iniciar prova final
iniciarProva.onclick = mostrarProvaFinal;

// Corrigir prova final
corrigirProva.onclick = corrigirProvaFinal;

// Gerar certificado
gerarCertificado.onclick = gerarCertificadoCurso;


/* =====================================
   INICIAR O CURSO
===================================== */

function iniciarAplicacao() {

    // Atualizar os módulos e o progresso
    atualizarModulos();

    atualizarProgresso();

    // Verificar se o curso já foi concluído
    if (cursoConcluido()) {

        atualizarConclusaoCurso();

    } else {

        areaEstudo.hidden = true;
        quizModulo.hidden = true;
        conclusaoCurso.hidden = true;
    }
}

// Executar quando a página carregar
iniciarAplicacao();