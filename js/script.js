
/* ========================================
   ESTILIZAÇÃO DA PÁGINA DO CURSOS DISPONIVEIS 
======================================== */


// ELEMENTOS DA PÁGINA

const searchInput = document.getElementById("searchInput");
const filters = document.querySelectorAll(".filter");
const cards = document.querySelectorAll(".course-card");
const emptyMessage = document.getElementById("emptyMessage");

const modal = document.getElementById("courseModal");
const modalTitle = document.getElementById("modalTitle");

// FILTRO SELECIONADO

let selectedFilter = "Todos";

// FUNÇÃO DE PESQUISA E FILTRAGEM

function filterCourses() {

    const search = searchInput.value.toLowerCase();
    let visibleCourses = 0;

    cards.forEach(card => {

        const title = card.querySelector("h2").textContent.toLowerCase();
        const category = card.dataset.category;

        const matchesSearch = title.includes(search);

        const matchesFilter =
            selectedFilter === "Todos" ||
            category === selectedFilter;

        if (matchesSearch && matchesFilter) {
            card.style.display = "block";
            visibleCourses++;
        } else {
            card.style.display = "none";
        }

    });

    // MOSTRA MENSAGEM SE NÃO ENCONTRAR CURSOS

    emptyMessage.style.display =
        visibleCourses === 0 ? "block" : "none";
}

// EVENTO DA BARRA DE PESQUISA

searchInput.addEventListener("input", filterCourses);

// EVENTO DOS BOTÕES DE FILTRO

filters.forEach(button => {

    button.addEventListener("click", () => {

        filters.forEach(filter => {
            filter.classList.remove("active");
        });

        button.classList.add("active");

        selectedFilter = button.dataset.filter;

        filterCourses();

    });

});

// ABRIR INFORMAÇÕES DO CURSO

document.querySelectorAll(".more").forEach(button => {

    button.addEventListener("click", () => {

        modalTitle.textContent = button.dataset.title;

        modal.classList.add("show");

    });

});

// FECHAR MODAL

function closeModal() {
    modal.classList.remove("show");
}

document.getElementById("closeModal")
    .addEventListener("click", closeModal);

document.getElementById("modalCloseButton")
    .addEventListener("click", closeModal);

// FECHAR AO CLICAR FORA DA JANELA

modal.addEventListener("click", event => {
    if (event.target === modal) {
        closeModal();
    }
});

// TERMINA AQUI O JAVA DA PAGINA DE CURSOS DISPONIVEIS



/* ========================================
   ESTILIZAÇÃO DA PÁGINA DO CURSO INTRODUÇÃO A TECNOLOGIA
======================================== */


const botoesAulas = document.querySelectorAll(".botao-concluir");

const barraProgresso = document.getElementById("barraProgresso");
const textoProgresso = document.getElementById("textoProgresso");
const statusCurso = document.getElementById("statusCurso");

const formQuiz = document.getElementById("formQuiz");
const formProva = document.getElementById("formProva");

const contadorQuiz = document.getElementById("contadorQuiz");
const contadorProva = document.getElementById("contadorProva");

const estadoQuiz = document.getElementById("estadoQuiz");
const estadoProva = document.getElementById("estadoProva");

const resultadoQuiz = document.getElementById("resultadoQuiz");
const resultadoProva = document.getElementById("resultadoProva");

const botaoCertificado = document.getElementById("acessarCertificado");
const mensagemCertificado = document.getElementById("mensagemCertificado");

const modulosConcluidos = new Set();

let quizAprovado = false;
let provaAprovada = false;

const respostasQuiz = {
    q1: "b",
    q2: "b",
    q3: "c",
    q4: "b",
    q5: "c",
    q6: "a"
};

const respostasProva = {
    p1: "b",
    p2: "b",
    p3: "b",
    p4: "b",
    p5: "c"
};

// ATUALIZAR PROGRESSO

function atualizarProgresso() {
    const totalEtapas = 5;

    const etapasConcluidas =
        modulosConcluidos.size +
        (quizAprovado ? 1 : 0) +
        (provaAprovada ? 1 : 0);

    const porcentagem = Math.round(
        (etapasConcluidas / totalEtapas) * 100
    );

    barraProgresso.style.width = porcentagem + "%";
    textoProgresso.textContent = porcentagem + "% concluído";

    if (porcentagem === 100) {
        statusCurso.textContent = "Parabéns! Você concluiu todas as etapas.";
    } else {
        statusCurso.textContent =
            `${etapasConcluidas} de ${totalEtapas} etapas concluídas.`;
    }

    atualizarCertificado();
}

// CONCLUIR MÓDULOS

botoesAulas.forEach(botao => {
    botao.addEventListener("click", () => {
        const numeroAula = botao.dataset.aula;

        modulosConcluidos.add(numeroAula);

        botao.textContent = "Módulo concluído ✓";
        botao.classList.add("concluido");
        botao.disabled = true;

        const status = document.getElementById(
            `statusAula${numeroAula}`
        );

        status.textContent = "Módulo concluído!";
        status.style.color = "#198754";

        atualizarProgresso();
    });
});

// CONTAR QUESTÕES RESPONDIDAS

function contarRespostas(formulario, total, contador) {
    const perguntas = formulario.querySelectorAll(
        'input[type="radio"]:checked'
    );

    contador.textContent =
        `${perguntas.length} de ${total} questões respondidas`;
}

formQuiz.addEventListener("change", () => {
    contarRespostas(formQuiz, 6, contadorQuiz);
});

formProva.addEventListener("change", () => {
    contarRespostas(formProva, 5, contadorProva);
});

// CORRIGIR AVALIAÇÃO

function corrigirAvaliacao(formulario, respostas, total, resultado) {
    let acertos = 0;
    let questoesCorrigidas = "";

    for (const pergunta in respostas) {
        const marcada = formulario.querySelector(
            `input[name="${pergunta}"]:checked`
        );

        if (!marcada) {
            resultado.textContent =
                "Responda todas as questões antes de finalizar.";

            return null;
        }

        const correta = respostas[pergunta];

        if (marcada.value === correta) {
            acertos++;
            questoesCorrigidas +=
                `<p>Questão ${pergunta.slice(1)}: correta ✓</p>`;
        } else {
            questoesCorrigidas +=
                `<p>Questão ${pergunta.slice(1)}: incorreta. Resposta correta: ${correta.toUpperCase()}.</p>`;
        }
    }

    resultado.innerHTML = `
        <strong>Resultado: ${acertos} de ${total} acertos.</strong>
        <div class="correcao">
            ${questoesCorrigidas}
        </div>
    `;

    return acertos;
}

// QUIZ

formQuiz.addEventListener("submit", evento => {
    evento.preventDefault();

    const acertos = corrigirAvaliacao(
        formQuiz,
        respostasQuiz,
        6,
        resultadoQuiz
    );

    if (acertos === null) return;

    quizAprovado = acertos >= 5;

    if (quizAprovado) {
        estadoQuiz.textContent = "Aprovado ✓";
    } else {
        estadoQuiz.textContent = "Não aprovado";
    }

    resultadoQuiz.innerHTML += quizAprovado
        ? "<p><strong>Parabéns! Você foi aprovado no quiz.</strong></p>"
        : "<p><strong>Você precisa acertar pelo menos 5 questões. Tente novamente.</strong></p>";

    atualizarProgresso();
});

// PROVA FINAL

formProva.addEventListener("submit", evento => {
    evento.preventDefault();

    const acertos = corrigirAvaliacao(
        formProva,
        respostasProva,
        5,
        resultadoProva
    );

    if (acertos === null) return;

    provaAprovada = acertos >= 4;

    if (provaAprovada) {
        estadoProva.textContent = "Aprovado ✓";
    } else {
        estadoProva.textContent = "Não aprovado";
    }

    resultadoProva.innerHTML += provaAprovada
        ? "<p><strong>Parabéns! Você foi aprovado na prova final.</strong></p>"
        : "<p><strong>Você precisa acertar pelo menos 4 questões. Tente novamente.</strong></p>";

    atualizarProgresso();
});

// LIBERAR CERTIFICADO

function atualizarCertificado() {
    const cursoConcluido =
        modulosConcluidos.size === 3 &&
        quizAprovado &&
        provaAprovada;

    botaoCertificado.disabled = !cursoConcluido;

    if (cursoConcluido) {
        mensagemCertificado.textContent =
            "Parabéns! Você concluiu os três módulos, o quiz e a prova final. Seu certificado demonstrativo está liberado.";
    }
}

botaoCertificado.addEventListener("click", () => {
    if (!botaoCertificado.disabled) {
        alert("Parabéns! Você concluiu o curso demonstrativo!");
    }
});

// INICIAR PROGRESSO

atualizarProgresso();
