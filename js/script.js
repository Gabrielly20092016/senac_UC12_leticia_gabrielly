
// Seleciona todos os links da página
const links = document.querySelectorAll('a[href^="#"]');

// Adiciona o evento de clique
links.forEach(link => {

    link.addEventListener('click', function (evento) {

        const destino = document.querySelector(this.getAttribute('href'));

        if (destino) {
            evento.preventDefault();

            destino.scrollIntoView({
                behavior: 'smooth'
            });
        }

    });

});

document.addEventListener("DOMContentLoaded", () => {

    // Elementos da página
    const lessonButtons = [
        ...document.querySelectorAll(".complete-btn")
    ];

    const progressBar = document.getElementById("progressBar");
    const progressText = document.getElementById("progressText");
    const progressDetail = document.getElementById("progressDetail");

    const quizForm = document.getElementById("quizForm");
    const examForm = document.getElementById("examForm");

    const quizResult = document.getElementById("quizResult");
    const examResult = document.getElementById("examResult");

    const certificateButton = document.getElementById("certificateButton");
    const certificateMessage = document.getElementById("certificateMessage");

    let quizPassed = false;
    let examPassed = false;

    // Guarda as aulas concluídas
    const completed = new Set();

    function updateProgress() {

        const percent = Math.round(
            (completed.size / lessonButtons.length) * 100
        );

        progressBar.style.width = percent + "%";

        progressText.textContent =
            percent + "% concluído";

        progressDetail.textContent =
            `${completed.size} de ${lessonButtons.length} aulas concluídas`;

        updateCertificate();
    }

    lessonButtons.forEach(button => {

        button.addEventListener("click", () => {

            const id = button.dataset.lesson;

            if (completed.has(id)) {

                // Desmarcar aula
                completed.delete(id);

                button.classList.remove("done");

                button.textContent =
                    "Marcar aula como concluída";

            } else {

                // Marcar aula como concluída
                completed.add(id);

                button.classList.add("done");

                button.textContent =
                    "✓ Aula concluída";
            }

            updateProgress();

        });

    });

    function grade(
        form,
        prefix,
        answers,
        minimum,
        resultElement,
        type
    ) {

        const data = new FormData(form);

        let score = 0;
        let unanswered = [];

        // Conferir cada resposta
        answers.forEach((answer, index) => {

            const key = prefix + (index + 1);

            if (!data.get(key)) {

                unanswered.push(index + 1);

            } else if (data.get(key) === answer) {

                score++;
            }

        });


        // Verificar questões sem resposta
        if (unanswered.length) {

            resultElement.textContent =
                "Responda todas as questões antes de enviar.";

            resultElement.style.color = "#b45309";

            return;
        }


        // Verificar aprovação
        const passed = score >= minimum;

        resultElement.textContent =
            `Você acertou ${score} de ${answers.length} questões. ${
                passed
                    ? "Parabéns, etapa concluída!"
                    : "Revise o conteúdo e tente novamente."
            }`;

        resultElement.style.color =
            passed ? "#23834a" : "#b42318";


        // Atualizar situação das avaliações
        if (type === "quiz") {
            quizPassed = passed;
        }

        if (type === "exam") {
            examPassed = passed;
        }

        updateCertificate();
    }

    quizForm.addEventListener("submit", event => {

        event.preventDefault();

        grade(
            quizForm,
            "q",
            quizAnswers,
            3,
            quizResult,
            "quiz"
        );

    });

    examForm.addEventListener("submit", event => {

        event.preventDefault();

        grade(
            examForm,
            "p",
            examAnswers,
            4,
            examResult,
            "exam"
        );

    });

    function updateCertificate() {

        const ready =
            completed.size === lessonButtons.length &&
            quizPassed &&
            examPassed;

        certificateButton.disabled = !ready;

        certificateMessage.textContent = ready

            ? "Parabéns! Você concluiu as aulas e foi aprovado nas avaliações. Seu certificado demonstrativo está liberado."

            : "Conclua os três módulos, seja aprovado no quiz e na prova final para liberar seu certificado demonstrativo.";
    }

    certificateButton.addEventListener("click", () => {

        if (certificateButton.disabled) return;

        const courseTitle =
            document.querySelector("h1").textContent;

        const win = window.open("", "_blank");

        if (!win) {

            alert(
                "Permita a abertura de janelas para visualizar o certificado."
            );

            return;
        }


        // Conteúdo do certificado
        win.document.write(`

            <!DOCTYPE html>

            <html lang="pt-BR">

            <head>

                <meta charset="UTF-8">

                <title>Certificado demonstrativo</title>

                <style>

                    body {
                        font-family: Arial, sans-serif;
                        background: #f5f2fa;
                        padding: 35px;
                        color: #30204e;
                    }

                    .certificate {
                        max-width: 850px;
                        margin: 35px auto;
                        background: white;
                        border: 10px double #6b20d7;
                        padding: 55px;
                        text-align: center;
                    }

                    h1 {
                        color: #5b19c9;
                        font-size: 38px;
                    }

                    h2 {
                        font-size: 25px;
                        margin: 35px 0 12px;
                    }

                    p {
                        line-height: 1.8;
                    }

                    .name {
                        font-size: 25px;
                        font-weight: bold;
                        border-bottom: 1px solid #aaa;
                        display: inline-block;
                        padding: 10px 50px;
                        margin: 18px;
                    }

                    small {
                        display: block;
                        margin-top: 35px;
                        color: #777;
                    }

                    @media print {

                        body {
                            background: white;
                            padding: 0;
                        }

                        .certificate {
                            margin: 0;
                            min-height: 80vh;
                        }

                    }

                </style>

            </head>

            <body>

                <main class="certificate">

                    <p>
                        <strong>SENAC + GAROTO</strong>
                    </p>

                    <h1>Certificado de conclusão</h1>

                    <p>Certificamos que</p>

                    <div class="name">
                        Participante do curso
                    </div>

                    <p>concluiu o curso demonstrativo</p>

                    <h2>${courseTitle}</h2>

                    <p>
                        com aproveitamento nas atividades
                        e avaliações propostas.
                    </p>

                    <small>
                        Certificado demonstrativo — sem validade oficial.
                    </small>

                    <p>
                        <button onclick="window.print()">
                            Imprimir certificado
                        </button>
                    </p>

                </main>

            </body>

            </html>

        `);

        win.document.close();

    });

    updateProgress();

});

const answerKeys = {

    "1": {

        quiz: ["b", "a", "c", "b"],

        exam: ["a", "b", "c", "a", "b"]

    },

    "2": {

        quiz: ["b", "a", "c", "b"],

        exam: ["a", "b", "c", "a", "b"]

    },

    "3": {

        quiz: ["a", "b", "c", "a"],

        exam: ["b", "c", "a", "b", "c"]

    },

    "4": {

        quiz: ["b", "c", "a", "b"],

        exam: ["a", "b", "c", "a", "b"]

    }

};


// Identificar qual curso está aberto
const courseKey = document.body.dataset.course;


// Selecionar os gabaritos correspondentes
const quizAnswers = answerKeys[courseKey].quiz;

const examAnswers = answerKeys[courseKey].exam;