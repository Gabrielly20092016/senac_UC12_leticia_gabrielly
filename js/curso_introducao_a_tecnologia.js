
/* =====================================
   CONTEÚDO DOS MÓDULOS
===================================== */

const modulos = [
    {
        titulo: "Introdução à Automação",
        descricao: "Conheça o conceito de automação, sua evolução e sua importância.",
        etapas: [
            {
                titulo: "O que é automação?",
                conteudo: `
                    <h3>Entendendo a automação</h3>
                    <p>Automação é o uso de tecnologias e sistemas para realizar tarefas com pouca ou nenhuma intervenção humana.</p>
                    <p>Ela está presente em diversos lugares, como indústrias, comércios, residências e empresas.</p>
                    <div class="destaque-conteudo">
                        <strong>Exemplo:</strong> uma porta automática utiliza sensores para identificar a aproximação de uma pessoa e abrir sem precisar empurrá-la.
                    </div>
                    <h3>Por que automatizar?</h3>
                    <ul>
                        <li>Facilitar tarefas repetitivas.</li>
                        <li>Aumentar a produtividade.</li>
                        <li>Melhorar a precisão dos processos.</li>
                        <li>Auxiliar no controle das atividades.</li>
                    </ul>`,
                pergunta: "O que significa automação?",
                opcoes: [
                    "Realizar todas as tarefas manualmente.",
                    "Utilizar tecnologias para executar tarefas automaticamente.",
                    "Eliminar todos os equipamentos de uma empresa.",
                    "Fazer apenas atividades de informática."
                ],
                resposta: 1
            },
            {
                titulo: "A evolução da automação",
                conteudo: `
                    <h3>Como tudo começou?</h3>
                    <p>Ao longo do tempo, as pessoas desenvolveram ferramentas e máquinas para facilitar o trabalho.</p>
                    <p>Com a evolução da eletricidade, da eletrônica e da informática, surgiram sistemas capazes de controlar processos com mais precisão.</p>
                    <h3>Automação atualmente</h3>
                    <p>Hoje, computadores, sensores, robôs e softwares são utilizados para acompanhar e controlar diferentes atividades.</p>
                    <div class="destaque-conteudo">
                        A automação evoluiu de mecanismos simples para sistemas inteligentes e conectados.
                    </div>`,
                pergunta: "O que contribuiu para o avanço da automação?",
                opcoes: [
                    "A redução do uso da tecnologia.",
                    "O abandono das máquinas.",
                    "O desenvolvimento da eletricidade, eletrônica e informática.",
                    "A substituição dos computadores por ferramentas manuais."
                ],
                resposta: 2
            },
            {
                titulo: "Onde encontramos a automação?",
                conteudo: `
                    <h3>Automação no cotidiano</h3>
                    <p>A automação não está presente apenas nas fábricas. Ela também aparece em situações comuns do dia a dia.</p>
                    <ul>
                        <li>Semáforos que controlam o trânsito.</li>
                        <li>Caixas de autoatendimento.</li>
                        <li>Máquinas de lavar roupas.</li>
                        <li>Sistemas de iluminação automática.</li>
                        <li>Equipamentos utilizados nas indústrias.</li>
                    </ul>
                    <div class="destaque-conteudo">
                        A automação ajuda a tornar atividades mais práticas, organizadas e eficientes.
                    </div>`,
                pergunta: "Qual alternativa apresenta um exemplo de automação no cotidiano?",
                opcoes: [
                    "Um caderno de anotações.",
                    "Uma cadeira comum.",
                    "Uma porta que abre automaticamente por meio de sensores.",
                    "Um livro impresso."
                ],
                resposta: 2
            }
        ],
        quiz: [
            ["Qual é o principal objetivo da automação?", ["Dificultar tarefas", "Facilitar e controlar processos", "Eliminar a tecnologia", "Aumentar o trabalho manual"], 1],
            ["Qual tecnologia ajudou no avanço da automação?", ["Eletrônica", "Máquina de escrever", "Papel", "Lápis"], 0],
            ["Qual é um exemplo de automação residencial?", ["Mesa de madeira", "Porta automática", "Caderno", "Estante"], 1],
            ["A automação está presente:", ["Somente nas fábricas", "Somente nos hospitais", "Em diferentes áreas da sociedade", "Apenas em computadores"], 2]
        ]
    },
    {
        titulo: "Sensores e Atuadores na Prática",
        descricao: "Entenda como sensores identificam informações e atuadores realizam ações.",
        etapas: [
            {
                titulo: "O que são sensores?",
                conteudo: `
                    <h3>Conhecendo os sensores</h3>
                    <p>Sensores são dispositivos que identificam mudanças no ambiente e transformam essas informações em sinais que podem ser interpretados por um sistema.</p>
                    <p>Eles podem identificar presença, temperatura, luminosidade, distância e outras informações.</p>
                    <div class="destaque-conteudo">
                        <strong>Exemplo:</strong> um sensor de presença pode identificar uma pessoa em um ambiente e enviar essa informação para um sistema de iluminação.
                    </div>`,
                pergunta: "Qual é a função de um sensor?",
                opcoes: [
                    "Armazenar documentos.",
                    "Identificar informações ou mudanças no ambiente.",
                    "Imprimir relatórios.",
                    "Produzir energia elétrica."
                ],
                resposta: 1
            },
            {
                titulo: "Tipos de sensores",
                conteudo: `
                    <h3>Conheça alguns tipos</h3>
                    <ul>
                        <li><strong>Sensor de temperatura:</strong> identifica alterações na temperatura.</li>
                        <li><strong>Sensor de presença:</strong> identifica a presença de pessoas ou objetos.</li>
                        <li><strong>Sensor de luminosidade:</strong> identifica a quantidade de luz.</li>
                        <li><strong>Sensor de proximidade:</strong> identifica objetos próximos.</li>
                    </ul>
                    <p>Cada sensor é escolhido de acordo com a necessidade do sistema automatizado.</p>`,
                pergunta: "Qual sensor pode identificar a quantidade de luz de um ambiente?",
                opcoes: [
                    "Sensor de temperatura.",
                    "Sensor de pressão.",
                    "Sensor de luminosidade.",
                    "Sensor de velocidade."
                ],
                resposta: 2
            },
            {
                titulo: "O que são atuadores?",
                conteudo: `
                    <h3>Entendendo os atuadores</h3>
                    <p>Atuadores são dispositivos que recebem comandos de um sistema e realizam uma ação física.</p>
                    <p>Entre os exemplos estão motores, válvulas e mecanismos de movimentação.</p>
                    <div class="destaque-conteudo">
                        <strong>Diferença:</strong> o sensor identifica uma informação. O atuador executa uma ação.
                    </div>
                    <p>Os dois podem trabalhar juntos em um sistema automatizado.</p>`,
                pergunta: "Qual alternativa apresenta um exemplo de atuador?",
                opcoes: [
                    "Sensor de luminosidade.",
                    "Motor elétrico.",
                    "Termômetro comum.",
                    "Câmera de observação."
                ],
                resposta: 1
            }
        ],
        quiz: [
            ["Qual é a função dos sensores?", ["Executar movimentos", "Identificar informações", "Armazenar arquivos", "Exibir vídeos"], 1],
            ["Qual sensor identifica a temperatura?", ["Sensor térmico", "Sensor de presença", "Sensor de luz", "Sensor de distância"], 0],
            ["O que é um atuador?", ["Um dispositivo que executa uma ação", "Um tipo de documento", "Um programa de texto", "Um dispositivo de armazenamento"], 0],
            ["Qual é a diferença entre sensor e atuador?", ["Não existe diferença", "O sensor identifica e o atuador executa uma ação", "O atuador identifica e o sensor imprime", "Os dois armazenam dados"], 1]
        ]
    },

    
]




/* =====================================
   ELEMENTOS DO HTML
===================================== */

const listaModulos = document.getElementById("listaModulos");
const areaEstudo = document.getElementById("areaEstudo");
const voltarModulos = document.getElementById("voltarModulos");

const identificacaoModulo = document.getElementById("identificacaoModulo");
const nomeEtapa = document.getElementById("nomeEtapa");
const contadorEtapa = document.getElementById("contadorEtapa");

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

const porcentagemGeral = document.getElementById("porcentagemGeral");
const barraGeral = document.getElementById("barraGeral");
const modulosConcluidos = document.getElementById("modulosConcluidos");
const etapasConcluidas = document.getElementById("etapasConcluidas");


/* =====================================
   CONTROLE DO PROGRESSO
===================================== */

let moduloAtual = 0;

let progresso = JSON.parse(
    localStorage.getItem("progressoAutomacaoNaPratica")
) || {
    etapasConcluidas: [],
    quizzesAprovados: []
};


/* =====================================
   SALVAR PROGRESSO
===================================== */

function salvarProgresso() {

    localStorage.setItem(
        "progressoAutomacaoNaPratica",
        JSON.stringify(progresso)
    );

}


/* =====================================
   VERIFICAR ETAPAS CONCLUÍDAS
===================================== */

function chaveEtapa(modulo, etapa) {

    return `${modulo}-${etapa}`;

}


function etapaConcluida(modulo, etapa) {

    return progresso.etapasConcluidas.includes(
        chaveEtapa(modulo, etapa)
    );

}


function quizAprovado(modulo) {

    return progresso.quizzesAprovados.includes(modulo);

}


function moduloConcluido(modulo) {

    return quizAprovado(modulo);

}


/* =====================================
   ATUALIZAR PROGRESSO GERAL
===================================== */

function atualizarProgresso() {

    const totalEtapas = modulos.reduce(
        (total, modulo) => total + modulo.etapas.length,
        0
    );

    const totalConcluidas = progresso.etapasConcluidas.length;

    const porcentagem = totalEtapas === 0
        ? 0
        : Math.round((totalConcluidas / totalEtapas) * 100);

    porcentagemGeral.textContent = `${porcentagem}%`;

    barraGeral.style.width = `${porcentagem}%`;

    modulosConcluidos.textContent =
        `${progresso.quizzesAprovados.length} de ${modulos.length}`;

    etapasConcluidas.textContent =
        `${totalConcluidas} de ${totalEtapas}`;

}


/* =====================================
   ATUALIZAR LISTA DE MÓDULOS
===================================== */

function atualizarModulos() {

    listaModulos.innerHTML = "";

    modulos.forEach((modulo, indice) => {

        const concluido = moduloConcluido(indice);

        const bloqueado =
            indice > 0 && !moduloConcluido(indice - 1);

        const quantidade = modulo.etapas.filter(
            (etapa, etapaIndice) =>
                etapaConcluida(indice, etapaIndice)
        ).length;

        const card = document.createElement("div");

        card.className = "card-modulo";

        card.innerHTML = `
            <h3>${modulo.titulo}</h3>

            <p>${modulo.descricao}</p>

            <p>
                ${quantidade} de ${modulo.etapas.length}
                etapas concluídas
            </p>

            <span>
                ${
                    concluido
                        ? "Concluído"
                        : bloqueado
                            ? "Bloqueado"
                            : "Disponível"
                }
            </span>

            <button
                class="botao-principal"
                ${bloqueado || concluido ? "disabled" : ""}
            >
                ${
                    concluido
                        ? "Módulo concluído"
                        : bloqueado
                            ? "Aguarde"
                            : "Acessar módulo"
                }
            </button>
        `;

        const botao = card.querySelector("button");

        if (!bloqueado && !concluido) {

            botao.addEventListener("click", () => {
                abrirModulo(indice);
            });

        }

        listaModulos.appendChild(card);

    });

    atualizarProgresso();

}


/* =====================================
   ABRIR UM MÓDULO
===================================== */

function abrirModulo(indice) {

    if (
        indice > 0 &&
        !moduloConcluido(indice - 1)
    ) {
        return;
    }

    if (moduloConcluido(indice)) {
        return;
    }

    moduloAtual = indice;

    areaEstudo.hidden = false;

    quizModulo.hidden = true;
    conteudoEtapa.hidden = false;
    perguntaEtapa.hidden = false;

    renderizarEtapa();

}


/* =====================================
   MOSTRAR ETAPA
===================================== */

function renderizarEtapa() {

    const modulo = modulos[moduloAtual];

    const indiceEtapa = modulo.etapas.findIndex(
        (etapa, indice) =>
            !etapaConcluida(moduloAtual, indice)
    );

    identificacaoModulo.textContent =
        `Módulo ${moduloAtual + 1} — ${modulo.titulo}`;

    if (indiceEtapa === -1) {

        mostrarQuiz();

        return;

    }

    const etapa = modulo.etapas[indiceEtapa];

    nomeEtapa.textContent = etapa.titulo;

    contadorEtapa.textContent =
        `Etapa ${indiceEtapa + 1} de ${modulo.etapas.length}`;

    const porcentagem =
        (indiceEtapa / modulo.etapas.length) * 100;

    barraEtapa.style.width = `${porcentagem}%`;

    conteudoEtapa.innerHTML = `
        <h2>${etapa.titulo}</h2>

        <div class="texto-etapa">
            ${etapa.conteudo}
        </div>
    `;

    textoPerguntaEtapa.textContent = etapa.pergunta;

    opcoesPerguntaEtapa.innerHTML = "";

    resultadoEtapa.textContent = "";
    resultadoEtapa.className = "resultado";

    etapa.opcoes.forEach((opcao, indice) => {

        const label = document.createElement("label");

        label.className = "opcao";

        label.innerHTML = `
            <input
                type="radio"
                name="respostaEtapa"
                value="${indice}"
            >

            <span>${opcao}</span>
        `;

        opcoesPerguntaEtapa.appendChild(label);

    });

    concluirEtapa.disabled = false;

    concluirEtapa.textContent = "Confirmar resposta";

    concluirEtapa.onclick = () => {
        verificarEtapa(indiceEtapa);
    };

    conteudoEtapa.hidden = false;
    perguntaEtapa.hidden = false;
    quizModulo.hidden = true;

}


/* =====================================
   VERIFICAR RESPOSTA DA ETAPA
===================================== */
function verificarEtapa(indiceEtapa) {

    const modulo = modulos[moduloAtual];

    const etapa = modulo.etapas[indiceEtapa];

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

    if (resposta !== etapa.resposta) {

        resultadoEtapa.textContent =
            "Resposta incorreta. Revise o conteúdo e tente novamente.";

        resultadoEtapa.className = "resultado erro";

        return;
    }

    const chave = chaveEtapa(moduloAtual, indiceEtapa);

    if (!progresso.etapasConcluidas.includes(chave)) {

        progresso.etapasConcluidas.push(chave);

    }

    salvarProgresso();

    atualizarModulos();

    resultadoEtapa.textContent =
        "Resposta correta! Etapa concluída.";

    resultadoEtapa.className = "resultado sucesso";

    opcoesPerguntaEtapa.querySelectorAll("input").forEach(input => {
        input.disabled = true;
    });

    if (indiceEtapa === modulo.etapas.length - 1) {

        concluirEtapa.textContent = "Módulo finalizado!";

        concluirEtapa.onclick = () => {

            concluirEtapa.hidden = true;

            const botoes = document.createElement("div");

            botoes.className = "botoes-final-modulo";

            const voltar = document.createElement("button");

            voltar.textContent = "Voltar aos módulos";
            voltar.className = "botao";

            voltar.onclick = () => {

                areaEstudo.hidden = true;
                listaModulos.hidden = false;

            };

            botoes.appendChild(voltar);

            if (moduloAtual < modulos.length - 1) {

                const proximo = document.createElement("button");

                proximo.textContent = "Próximo módulo";
                proximo.className = "botao";

                proximo.onclick = () => {

                    abrirModulo(moduloAtual + 1);

                };

                botoes.appendChild(proximo);

            }

            areaEstudo.appendChild(botoes);

        };

    } else {

        concluirEtapa.textContent = "Próxima etapa";

        concluirEtapa.onclick = () => {
            renderizarEtapa();
        };

    }
}
/* =====================================
   VOLTAR PARA OS MÓDULOS
===================================== */

voltarModulos.addEventListener("click", () => {

    areaEstudo.hidden = true;

    atualizarModulos();

});


/* =====================================
   INICIALIZAÇÃO
===================================== */

atualizarModulos();

/* =====================================
   PARTE 3 — QUIZZES E PROVA FINAL
===================================== */


/* =====================================
   FUNÇÃO PARA MOSTRAR RESULTADOS
===================================== */

function mostrarResultado(elemento, mensagem, sucesso) {
    elemento.textContent = mensagem;

    elemento.className = sucesso
        ? "resultado sucesso"
        : "resultado erro";
}


/* =====================================
   VERIFICAR CONCLUSÃO DO CURSO
===================================== */

function cursoConcluido() {
    return modulos.every((modulo, indice) =>
        progresso.quizzesAprovados.includes(indice)
    );
}


/* =====================================
   GARANTIR DADOS DA PROVA FINAL
===================================== */

if (typeof progresso.provaAprovada !== "boolean") {
    progresso.provaAprovada = false;
}

if (typeof progresso.notaFinal !== "number") {
    progresso.notaFinal = null;
}

salvarProgresso();


/* =====================================
   QUIZ DO MÓDULO
===================================== */

function abrirQuiz(indiceModulo) {

    moduloAtual = indiceModulo;

    const modulo = modulos[indiceModulo];

    const areaQuiz = document.getElementById("quizModulo");
    const questoesQuiz = document.getElementById("questoesQuiz");
    const resultadoQuiz = document.getElementById("resultadoQuiz");

    questoesQuiz.innerHTML = "";
    resultadoQuiz.textContent = "";

    areaQuiz.hidden = false;

    modulo.quiz.forEach((questao, indice) => {

        const [pergunta, opcoes] = questao;

        const artigo = document.createElement("article");
        artigo.className = "questao";

        const titulo = document.createElement("h3");
        titulo.textContent = `${indice + 1}. ${pergunta}`;

        artigo.appendChild(titulo);

        opcoes.forEach((opcao, numero) => {

            const label = document.createElement("label");

            const input = document.createElement("input");

            input.type = "radio";
            input.name = `quiz_${indice}`;
            input.value = numero;

            label.appendChild(input);
            label.appendChild(
                document.createTextNode(` ${opcao}`)
            );

            artigo.appendChild(label);
        });

        questoesQuiz.appendChild(artigo);
    });
}


/* =====================================
   CORRIGIR QUIZ DO MÓDULO
===================================== */

document.getElementById("corrigirQuiz").addEventListener("click", () => {

    const modulo = modulos[moduloAtual];

    let acertos = 0;
    let respondidas = 0;

    modulo.quiz.forEach((questao, indice) => {

        const resposta = document.querySelector(
            `input[name="quiz_${indice}"]:checked`
        );

        if (resposta) {
            respondidas++;

            if (Number(resposta.value) === questao[2]) {
                acertos++;
            }
        }
    });

    const resultadoQuiz = document.getElementById("resultadoQuiz");

    if (respondidas !== modulo.quiz.length) {

        mostrarResultado(
            resultadoQuiz,
            "Responda todas as questões antes de corrigir.",
            false
        );

        return;
    }

    const porcentagem = Math.round(
        (acertos / modulo.quiz.length) * 100
    );

    if (porcentagem >= 75) {

        if (!progresso.quizzesAprovados.includes(moduloAtual)) {
            progresso.quizzesAprovados.push(moduloAtual);
        }

        salvarProgresso();

        mostrarResultado(
            resultadoQuiz,
            `Parabéns! Você acertou ${acertos} de ${modulo.quiz.length} questões (${porcentagem}%). Módulo aprovado!`,
            true
        );

        atualizarModulos();

        const botaoVoltar = document.createElement("button");

        botaoVoltar.textContent = "Voltar aos módulos";
        botaoVoltar.className = "botao";

        botaoVoltar.addEventListener("click", () => {

            document.getElementById("quizModulo").hidden = true;
            document.getElementById("areaEstudo").hidden = true;
            document.getElementById("listaModulos").hidden = false;

        });

        resultadoQuiz.appendChild(botaoVoltar);

    } else {

        mostrarResultado(
            resultadoQuiz,
            `Você acertou ${acertos} de ${modulo.quiz.length} questões (${porcentagem}%). É necessário alcançar 75% para aprovar. Tente novamente!`,
            false
        );
    }
});


/* =====================================
   ATUALIZAR ÁREA DA PROVA FINAL
===================================== */

function atualizarProva() {

    const conclusaoCurso = document.getElementById("conclusaoCurso");
    const iniciarProva = document.getElementById("iniciarProva");
    const areaCertificado = document.getElementById("areaCertificado");

    if (cursoConcluido()) {

        conclusaoCurso.hidden = false;
        iniciarProva.hidden = false;

    } else {

        conclusaoCurso.hidden = true;
        iniciarProva.hidden = true;
    }

    if (progresso.provaAprovada) {
        areaCertificado.hidden = false;
    } else {
        areaCertificado.hidden = true;
    }
}


/* =====================================
   INICIAR PROVA FINAL
===================================== */

document.getElementById("iniciarProva").addEventListener("click", () => {

    const areaProva = document.getElementById("areaProva");
    const questoesProva = document.getElementById("questoesProva");
    const resultadoProva = document.getElementById("resultadoProva");

    questoesProva.innerHTML = "";
    resultadoProva.textContent = "";

    areaProva.hidden = false;

    provaFinal.forEach((questao, indice) => {

        const [pergunta, opcoes] = questao;

        const artigo = document.createElement("article");
        artigo.className = "questao";

        const titulo = document.createElement("h3");
        titulo.textContent = `${indice + 1}. ${pergunta}`;

        artigo.appendChild(titulo);

        opcoes.forEach((opcao, numero) => {

            const label = document.createElement("label");

            const input = document.createElement("input");

            input.type = "radio";
            input.name = `prova_${indice}`;
            input.value = numero;

            label.appendChild(input);

            label.appendChild(
                document.createTextNode(` ${opcao}`)
            );

            artigo.appendChild(label);
        });

        questoesProva.appendChild(artigo);
    });
});


/* =====================================
   CORRIGIR PROVA FINAL
===================================== */

document.getElementById("corrigirProva").addEventListener("click", () => {

    let acertos = 0;
    let respondidas = 0;

    provaFinal.forEach((questao, indice) => {

        const resposta = document.querySelector(
            `input[name="prova_${indice}"]:checked`
        );

        if (resposta) {

            respondidas++;

            if (Number(resposta.value) === questao[2]) {
                acertos++;
            }
        }
    });

    const resultadoProva = document.getElementById("resultadoProva");

    if (respondidas !== provaFinal.length) {

        mostrarResultado(
            resultadoProva,
            "Responda todas as questões antes de corrigir.",
            false
        );

        return;
    }

    const porcentagem = Math.round(
        (acertos / provaFinal.length) * 100
    );

    if (porcentagem >= 70) {

        progresso.provaAprovada = true;
        progresso.notaFinal = porcentagem;

        salvarProgresso();

        mostrarResultado(
            resultadoProva,
            `Parabéns! Você acertou ${acertos} de ${provaFinal.length} questões (${porcentagem}%). Você foi aprovado na prova final!`,
            true
        );

        atualizarProva();

    } else {

        mostrarResultado(
            resultadoProva,
            `Você acertou ${acertos} de ${provaFinal.length} questões (${porcentagem}%). É necessário alcançar 70% para ser aprovado. Tente novamente!`,
            false
        );
    }
});

/* =====================================
   BOTÕES AO FINALIZAR O MÓDULO
===================================== */

function mostrarBotoesFinalModulo() {

    const areaEstudo = document.getElementById("areaEstudo");

    const botoes = document.createElement("div");
    botoes.className = "botoes-final-modulo";

    const voltar = document.createElement("button");
    voltar.textContent = "Voltar aos módulos";
    voltar.className = "botao";

    voltar.addEventListener("click", () => {
        areaEstudo.hidden = true;
        document.getElementById("listaModulos").hidden = false;
    });

    botoes.appendChild(voltar);

    if (moduloAtual < modulos.length - 1) {

        const proximo = document.createElement("button");
        proximo.textContent = "Próximo módulo";
        proximo.className = "botao";

        proximo.addEventListener("click", () => {
            abrirModulo(moduloAtual + 1);
        });

        botoes.appendChild(proximo);
    }

    areaEstudo.appendChild(botoes);
}

/* =====================================
   GERAR CERTIFICADO
===================================== */

document.getElementById("gerarCertificado").addEventListener("click", () => {

    const nomeCertificado = document.getElementById("nomeCertificado");
    const nomeAlunoImpresso = document.getElementById("nomeAlunoImpresso");
    const certificadoImpresso = document.getElementById("certificadoImpresso");

    const nome = nomeCertificado.value.trim();

    if (nome.length < 3) {

        alert("Digite seu nome completo para gerar o certificado.");

        return;
    }

    if (!cursoConcluido() || !progresso.provaAprovada) {

        alert("Conclua todos os módulos e seja aprovado na prova final antes de gerar o certificado.");

        return;
    }

    nomeAlunoImpresso.textContent = nome;

    certificadoImpresso.hidden = false;
});


/* =====================================
   ATUALIZAR A PÁGINA AO INICIAR
===================================== */

atualizarProva();
atualizarModulos();


/* =====================================
   FIM DO JAVASCRIPT
===================================== */