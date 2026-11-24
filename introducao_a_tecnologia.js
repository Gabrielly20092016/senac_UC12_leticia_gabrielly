
const aulasConcluidas = new Set();

let quizAprovado = false;
let provaAprovada = false;

const totalAulas = 3;

// MARCAR AULAS COMO CONCLUÍDAS

document.querySelectorAll(".botao-concluir").forEach((botao) => {

    botao.addEventListener("click", () => {

        const numero = Number(botao.dataset.aula);

        aulasConcluidas.add(numero);

        botao.textContent = "✓ Aula concluída";
        botao.classList.add("concluida");

        atualizarProgresso();

    });

});

// ATUALIZAR PROGRESSO

function atualizarProgresso() {

    const etapasConcluidas =
        aulasConcluidas.size +
        (quizAprovado ? 1 : 0) +
        (provaAprovada ? 1 : 0);

    const totalEtapas = 5;

    const porcentagem =
        Math.round((etapasConcluidas / totalEtapas) * 100);

    document.querySelector("#barraProgresso").style.width =
        porcentagem + "%";

    document.querySelector("#textoProgresso").textContent =
        porcentagem + "% concluído";

    liberarCertificado();

}

// CORRIGIR QUIZ

document.querySelector("#formQuiz").addEventListener("submit", (event) => {

    event.preventDefault();

    const respostas = {
        q1: "b",
        q2: "a",
        q3: "c",
        q4: "b"
    };

    let acertos = 0;

    for (let pergunta in respostas) {

        const respostaMarcada =
            document.querySelector(
                `input[name="${pergunta}"]:checked`
            );

        if (!respostaMarcada) {
            document.querySelector("#resultadoQuiz").textContent =
                "Responda todas as perguntas antes de enviar.";
            return;
        }

        if (respostaMarcada.value === respostas[pergunta]) {
            acertos++;
        }
    }

    if (acertos >= 3) {

        quizAprovado = true;

        document.querySelector("#resultadoQuiz").textContent =
            `Parabéns! Você acertou ${acertos} de 4 e foi aprovado no quiz.`;

        document.querySelector("#resultadoQuiz").style.color = "green";

    } else {

        document.querySelector("#resultadoQuiz").textContent =
            `Você acertou ${acertos} de 4. Revise as aulas e tente novamente.`;

        document.querySelector("#resultadoQuiz").style.color = "red";

    }

    atualizarProgresso();

});

// CORRIGIR PROVA FINAL

document.querySelector("#formProva").addEventListener("submit", (event) => {

    event.preventDefault();

    const respostas = {
        p1: "a",
        p2: "b",
        p3: "a",
        p4: "c",
        p5: "b"
    };

    let acertos = 0;

    for (let pergunta in respostas) {

        const respostaMarcada =
            document.querySelector(
                `input[name="${pergunta}"]:checked`
            );

        if (!respostaMarcada) {
            document.querySelector("#resultadoProva").textContent =
                "Responda todas as perguntas antes de finalizar.";
            return;
        }

        if (respostaMarcada.value === respostas[pergunta]) {
            acertos++;
        }

    }

    if (acertos >= 4) {

        provaAprovada = true;

        document.querySelector("#resultadoProva").textContent =
            `Parabéns! Você acertou ${acertos} de 5. Aprovado!`;

        document.querySelector("#resultadoProva").style.color = "green";

    } else {

        document.querySelector("#resultadoProva").textContent =
            `Você acertou ${acertos} de 5. Tente novamente.`;

        document.querySelector("#resultadoProva").style.color = "red";

    }

    atualizarProgresso();

});

// LIBERAR CERTIFICADO

function liberarCertificado() {

    const todasAulasConcluidas =
        aulasConcluidas.size === totalAulas;

    const certificadoLiberado =
        todasAulasConcluidas &&
        quizAprovado &&
        provaAprovada;

    const botao =
        document.querySelector("#acessarCertificado");

    const mensagem =
        document.querySelector("#mensagemCertificado");

    botao.disabled = !certificadoLiberado;

    if (certificadoLiberado) {

        mensagem.textContent =
            "Parabéns! Você concluiu todas as etapas do curso. Seu certificado demonstrativo está liberado!";

    }

}

// ACESSAR CERTIFICADO

document.querySelector("#acessarCertificado").addEventListener("click", () => {

    if (document.querySelector("#acessarCertificado").disabled) {
        return;
    }

    const nome = prompt("Digite seu nome completo:");

    if (!nome || !nome.trim()) {
        return;
    }

    const janela = window.open("", "_blank");

    if (!janela) {
        alert("Permita a abertura de janelas para visualizar o certificado.");
        return;
    }

    janela.document.write(`
        <!DOCTYPE html>
        <html lang="pt-BR">
        <head>
            <meta charset="UTF-8">
            <title>Certificado demonstrativo</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    text-align: center;
                    padding: 50px 20px;
                    background: #f5f2f7;
                }

                .certificado {
                    max-width: 750px;
                    margin: auto;
                    padding: 55px 25px;
                    background: white;
                    border: 8px double #4c0784;
                }

                h1 {
                    color: #4c0784;
                    font-size: 38px;
                }

                h2 {
                    color: #4c0784;
                }

                p {
                    line-height: 1.8;
                }

                .aviso {
                    margin-top: 40px;
                    font-size: 12px;
                    color: #777;
                }

                button {
                    margin-top: 25px;
                    padding: 12px 20px;
                    background: #4c0784;
                    color: white;
                    border: none;
                    cursor: pointer;
                }

                @media print {
                    button {
                        display: none;
                    }

                    body {
                        background: white;
                    }
                }
            </style>
        </head>

        <body>

            <div class="certificado">

                <h2>SENAC + GAROTO</h2>

                <h1>Certificado</h1>

                <p>Certificamos que</p>

                <h2>${nome.replace(/[&<>"']/g, caractere => ({
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#39;"
                })[caractere])}</h2>

                <p>
                    concluiu as atividades do curso
                </p>

                <h2>
                    Introdução à tecnologia e sistemas industriais
                </h2>

                <p>
                    Data: ${new Date().toLocaleDateString("pt-BR")}
                </p>

                <p class="aviso">
                    Certificado demonstrativo.
                    Não possui validade oficial.
                </p>

                <button onclick="window.print()">
                    Imprimir certificado
                </button>

            </div>

        </body>
        </html>
    `);

    janela.document.close();

});
