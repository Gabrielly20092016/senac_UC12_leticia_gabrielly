
/* =========================================
   DADOS DOS MÓDULOS
========================================= */

const modulos = [

    {
        titulo: "Introdução à Automação",
        descricao: "Conheça os conceitos básicos da automação e sua importância nos processos industriais.",
        etapas: [
            {
                titulo: "O que é automação?",
                subtitulo: "Entendendo o conceito de automação",
                texto: `
                    <p>A automação é o uso de tecnologias e sistemas para realizar tarefas com pouca ou nenhuma intervenção humana.</p>
                    <p>Ela permite que máquinas, equipamentos e programas executem atividades de maneira organizada e controlada.</p>
                    <p>Seu objetivo é melhorar a eficiência, a produtividade e a qualidade dos processos.</p>
                    <ul>
                        <li>Redução de tarefas repetitivas.</li>
                        <li>Maior precisão nas atividades.</li>
                        <li>Melhor aproveitamento do tempo.</li>
                    </ul>
                `
            },
            {
                titulo: "A evolução da automação",
                subtitulo: "Da produção manual aos sistemas inteligentes",
                texto: `
                    <p>A automação passou por várias transformações ao longo da história.</p>
                    <p>Inicialmente, muitas atividades eram realizadas manualmente. Com o desenvolvimento das máquinas, surgiram equipamentos capazes de executar tarefas de forma automática.</p>
                    <p>Atualmente, computadores, sensores, robôs e sistemas inteligentes fazem parte dos processos industriais.</p>
                    <ul>
                        <li>Primeira fase: trabalho predominantemente manual.</li>
                        <li>Segunda fase: utilização de máquinas.</li>
                        <li>Terceira fase: controle eletrônico e computacional.</li>
                        <li>Fase atual: integração e sistemas inteligentes.</li>
                    </ul>
                `
            },
            {
                titulo: "A importância da automação",
                subtitulo: "Como ela transforma as atividades",
                texto: `
                    <p>A automação está presente em diferentes áreas, como indústrias, hospitais, comércios e residências.</p>
                    <p>Nas indústrias, ela ajuda a controlar máquinas, organizar a produção e acompanhar processos.</p>
                    <p>Além disso, permite identificar falhas e melhorar a segurança das operações.</p>
                    <ul>
                        <li>Aumenta a produtividade.</li>
                        <li>Ajuda no controle de qualidade.</li>
                        <li>Contribui para a segurança.</li>
                    </ul>
                `
            }
        ],
        quiz: [
            {
                pergunta: "O que é automação?",
                alternativas: [
                    "Realizar todas as atividades manualmente.",
                    "Utilizar tecnologias para executar tarefas automaticamente.",
                    "Eliminar todos os equipamentos tecnológicos.",
                    "Substituir os sistemas de controle por trabalhos manuais."
                ],
                correta: 1
            },
            {
                pergunta: "Qual é um dos objetivos da automação?",
                alternativas: [
                    "Diminuir a eficiência.",
                    "Aumentar tarefas repetitivas.",
                    "Melhorar a produtividade.",
                    "Impedir o funcionamento das máquinas."
                ],
                correta: 2
            },
            {
                pergunta: "Onde podemos encontrar a automação?",
                alternativas: [
                    "Somente nas indústrias.",
                    "Apenas em computadores.",
                    "Somente em hospitais.",
                    "Em indústrias, residências e diversos setores."
                ],
                correta: 3
            }
        ]
    },

    {
        titulo: "Sensores e Atuadores na Prática",
        descricao: "Aprenda como os sensores identificam informações e como os atuadores executam ações.",
        etapas: [
            {
                titulo: "O que são sensores?",
                subtitulo: "Identificando informações do ambiente",
                texto: `
                    <p>Sensores são dispositivos utilizados para identificar alterações ou condições do ambiente.</p>
                    <p>Eles podem detectar temperatura, presença, distância, luminosidade e pressão.</p>
                    <p>As informações identificadas podem ser enviadas para um sistema de controle.</p>
                    <ul>
                        <li>Sensor de temperatura.</li>
                        <li>Sensor de presença.</li>
                        <li>Sensor de luminosidade.</li>
                        <li>Sensor de proximidade.</li>
                    </ul>
                `
            },
            {
                titulo: "O que são atuadores?",
                subtitulo: "Transformando comandos em ações",
                texto: `
                    <p>Atuadores são dispositivos responsáveis por executar ações a partir de comandos recebidos de um sistema de controle.</p>
                    <p>Um atuador pode produzir movimento, calor ou outras respostas físicas.</p>
                    <ul>
                        <li>Motores elétricos.</li>
                        <li>Válvulas automáticas.</li>
                        <li>Cilindros pneumáticos.</li>
                        <li>Relés e dispositivos de acionamento.</li>
                    </ul>
                `
            },
            {
                titulo: "Sensores e atuadores trabalhando juntos",
                subtitulo: "A comunicação entre os dispositivos",
                texto: `
                    <p>Em um sistema automatizado, sensores e atuadores trabalham em conjunto.</p>
                    <p>O sensor identifica uma condição, o sistema de controle analisa a informação e o atuador executa uma ação.</p>
                    <p>Por exemplo: uma porta automática identifica a aproximação de uma pessoa e utiliza um motor para abrir a porta.</p>
                    <ul>
                        <li>Sensor: identifica a presença.</li>
                        <li>Controlador: interpreta a informação.</li>
                        <li>Atuador: executa o movimento.</li>
                    </ul>
                `
            }
        ],
        quiz: [
            {
                pergunta: "Qual é a principal função de um sensor?",
                alternativas: [
                    "Executar movimentos mecânicos.",
                    "Identificar informações do ambiente.",
                    "Armazenar energia elétrica.",
                    "Produzir peças industriais."
                ],
                correta: 1
            },
            {
                pergunta: "Qual alternativa apresenta um atuador?",
                alternativas: [
                    "Sensor de temperatura.",
                    "Sensor de presença.",
                    "Motor elétrico.",
                    "Sensor de luminosidade."
                ],
                correta: 2
            },
            {
                pergunta: "Em uma porta automática, qual é a função do sensor?",
                alternativas: [
                    "Identificar a aproximação de uma pessoa.",
                    "Realizar o movimento da porta.",
                    "Armazenar energia.",
                    "Imprimir informações."
                ],
                correta: 0
            }
        ]
    },

    {
        titulo: "Comandos Elétricos e Lógica de Controle",
        descricao: "Entenda como funcionam os comandos elétricos e os sistemas utilizados para controlar equipamentos.",
        etapas: [
            {
                titulo: "Introdução aos comandos elétricos",
                subtitulo: "Controlando equipamentos",
                texto: `
                    <p>Comandos elétricos são conjuntos de dispositivos utilizados para controlar o funcionamento de equipamentos elétricos.</p>
                    <p>São encontrados em máquinas, motores e instalações industriais.</p>
                    <p>Esses comandos permitem ligar, desligar e controlar equipamentos.</p>
                    <ul>
                        <li>Botoeiras.</li>
                        <li>Contatores.</li>
                        <li>Relés.</li>
                        <li>Dispositivos de proteção.</li>
                    </ul>
                `
            },
            {
                titulo: "Elementos dos circuitos de controle",
                subtitulo: "Conhecendo os componentes",
                texto: `
                    <p>Os circuitos de controle utilizam diferentes componentes para organizar as operações.</p>
                    <p>As botoeiras permitem enviar comandos, enquanto os contatores realizam o acionamento de cargas elétricas.</p>
                    <p>Os relés podem controlar circuitos e auxiliar na lógica de funcionamento.</p>
                    <ul>
                        <li>Botoeira de ligar.</li>
                        <li>Botoeira de desligar.</li>
                        <li>Contator.</li>
                        <li>Relé de controle.</li>
                    </ul>
                `
            },
            {
                titulo: "Lógica de controle",
                subtitulo: "Como os sistemas tomam decisões",
                texto: `
                    <p>A lógica de controle define como um sistema deve responder a determinadas condições.</p>
                    <p>Ela utiliza informações de entrada para determinar quais ações devem acontecer.</p>
                    <p>Um exemplo simples é um sistema que permite ligar uma máquina somente quando determinadas condições de segurança são atendidas.</p>
                    <ul>
                        <li>Entrada: informação recebida.</li>
                        <li>Processamento: análise das condições.</li>
                        <li>Saída: comando executado.</li>
                    </ul>
                `
            }
        ],
        quiz: [
            {
                pergunta: "Para que servem os comandos elétricos?",
                alternativas: [
                    "Somente para armazenar arquivos.",
                    "Para controlar equipamentos elétricos.",
                    "Para medir temperatura corporal.",
                    "Para substituir todos os sensores."
                ],
                correta: 1
            },
            {
                pergunta: "Qual componente pode realizar o acionamento de cargas elétricas?",
                alternativas: [
                    "Contator.",
                    "Sensor de luminosidade.",
                    "Teclado.",
                    "Monitor."
                ],
                correta: 0
            },
            {
                pergunta: "O que representa a saída em um sistema de controle?",
                alternativas: [
                    "A informação inicial.",
                    "O ambiente externo.",
                    "A ação ou resposta do sistema.",
                    "Apenas os dados armazenados."
                ],
                correta: 2
            }
        ]
    },

    {
        titulo: "Controladores Lógicos Programáveis (CLP)",
        descricao: "Conheça os CLPs e entenda como eles controlam processos automatizados.",
        etapas: [
            {
                titulo: "O que é um CLP?",
                subtitulo: "Conhecendo o controlador lógico programável",
                texto: `
                    <p>CLP significa Controlador Lógico Programável.</p>
                    <p>É um equipamento eletrônico utilizado para controlar máquinas e processos industriais.</p>
                    <p>Ele recebe informações de sensores, executa um programa e envia comandos para os dispositivos de saída.</p>
                    <ul>
                        <li>Recebe sinais de entrada.</li>
                        <li>Processa informações.</li>
                        <li>Controla dispositivos de saída.</li>
                    </ul>
                `
            },
            {
                titulo: "Entradas e saídas do CLP",
                subtitulo: "Como o controlador recebe e envia informações",
                texto: `
                    <p>O CLP possui entradas e saídas utilizadas para se comunicar com outros dispositivos.</p>
                    <p>As entradas recebem informações de sensores e botoeiras.</p>
                    <p>As saídas enviam comandos para motores, lâmpadas, válvulas e outros equipamentos.</p>
                    <ul>
                        <li>Entrada: botão de comando.</li>
                        <li>Processamento: programa do CLP.</li>
                        <li>Saída: acionamento de um dispositivo.</li>
                    </ul>
                `
            },
            {
                titulo: "Programação e funcionamento",
                subtitulo: "A lógica utilizada pelo CLP",
                texto: `
                    <p>O CLP funciona por meio de um programa que determina como os equipamentos devem responder às informações recebidas.</p>
                    <p>Uma das linguagens utilizadas é a Ladder, que representa a lógica de controle por meio de símbolos gráficos.</p>
                    <p>O programa permite organizar condições e comandos de acordo com o funcionamento desejado.</p>
                    <ul>
                        <li>Leitura das entradas.</li>
                        <li>Execução do programa.</li>
                        <li>Atualização das saídas.</li>
                    </ul>
                `
            }
        ],
        quiz: [
            {
                pergunta: "O que significa a sigla CLP?",
                alternativas: [
                    "Controle de Luz Programada.",
                    "Comando Lógico de Produção.",
                    "Controlador Lógico Programável.",
                    "Circuito de Ligação Principal."
                ],
                correta: 2
            },
            {
                pergunta: "Qual é a função das entradas de um CLP?",
                alternativas: [
                    "Receber informações de dispositivos.",
                    "Imprimir documentos.",
                    "Armazenar energia mecânica.",
                    "Executar movimentos diretamente."
                ],
                correta: 0
            },
            {
                pergunta: "Qual é uma linguagem utilizada na programação de CLPs?",
                alternativas: [
                    "HTML.",
                    "Ladder.",
                    "CSS.",
                    "Photoshop."
                ],
                correta: 1
            }
        ]
    },

    {
        titulo: "Aplicações Práticas da Automação",
        descricao: "Explore aplicações da automação em indústrias, residências e diferentes setores.",
        etapas: [
            {
                titulo: "Automação industrial",
                subtitulo: "Tecnologia nos processos de produção",
                texto: `
                    <p>A automação industrial utiliza máquinas, sensores, controladores e programas para organizar os processos de produção.</p>
                    <p>Ela está presente em linhas de montagem, sistemas de embalagem e controle de qualidade.</p>
                    <ul>
                        <li>Linhas de produção automatizadas.</li>
                        <li>Esteiras transportadoras.</li>
                        <li>Braços robóticos.</li>
                        <li>Controle de processos.</li>
                    </ul>
                `
            },
            {
                titulo: "Automação residencial",
                subtitulo: "Tecnologia no cotidiano",
                texto: `
                    <p>A automação residencial utiliza dispositivos conectados para facilitar o controle de equipamentos em uma casa.</p>
                    <p>É possível automatizar iluminação, climatização, segurança e outros recursos.</p>
                    <ul>
                        <li>Lâmpadas inteligentes.</li>
                        <li>Controle automático de temperatura.</li>
                        <li>Portões automáticos.</li>
                        <li>Sistemas de monitoramento.</li>
                    </ul>
                `
            },
            {
                titulo: "O futuro da automação",
                subtitulo: "Novas tecnologias e possibilidades",
                texto: `
                    <p>A automação continua evoluindo com o desenvolvimento da inteligência artificial, robótica e Internet das Coisas.</p>
                    <p>Essas tecnologias permitem integrar equipamentos, analisar informações e melhorar diferentes processos.</p>
                    <p>O profissional da área precisa acompanhar as mudanças tecnológicas e desenvolver conhecimentos constantemente.</p>
                    <ul>
                        <li>Inteligência artificial.</li>
                        <li>Robótica.</li>
                        <li>Internet das Coisas.</li>
                        <li>Indústria 4.0.</li>
                    </ul>
                `
            }
        ],
        quiz: [
            {
                pergunta: "Qual é um exemplo de automação industrial?",
                alternativas: [
                    "Escrever em um caderno.",
                    "Utilizar braços robóticos em uma linha de produção.",
                    "Ler um livro.",
                    "Desenhar manualmente."
                ],
                correta: 1
            },
            {
                pergunta: "Qual alternativa apresenta um exemplo de automação residencial?",
                alternativas: [
                    "Lâmpadas inteligentes.",
                    "Máquina de escrever.",
                    "Caderno escolar.",
                    "Livro impresso."
                ],
                correta: 0
            },
            {
                pergunta: "Qual tecnologia está relacionada ao desenvolvimento da automação?",
                alternativas: [
                    "Máquina de escrever.",
                    "Papel e lápis.",
                    "Internet das Coisas.",
                    "Impressão manual."
                ],
                correta: 2
            }
        ]
    }

];


/* =========================================
   AVALIAÇÃO FINAL
========================================= */

const provaFinal = [
    {
        pergunta: "O que caracteriza um sistema automatizado?",
        alternativas: [
            "A realização exclusiva de tarefas manuais.",
            "A utilização de tecnologias para executar e controlar processos.",
            "A ausência de dispositivos eletrônicos.",
            "O funcionamento sem qualquer organização."
        ],
        correta: 1
    },
    {
        pergunta: "Qual dispositivo identifica alterações no ambiente?",
        alternativas: ["Motor", "Contator", "Sensor", "Válvula"],
        correta: 2
    },
    {
        pergunta: "Qual é a função de um atuador?",
        alternativas: [
            "Executar ações a partir de comandos.",
            "Somente armazenar informações.",
            "Identificar a temperatura.",
            "Criar programas de computador."
        ],
        correta: 0
    },
    {
        pergunta: "Qual componente é utilizado em comandos elétricos?",
        alternativas: ["Monitor", "Contator", "Teclado", "Impressora"],
        correta: 1
    },
    {
        pergunta: "O que representa uma entrada em um sistema de controle?",
        alternativas: [
            "A ação executada.",
            "O resultado final.",
            "Uma informação recebida pelo sistema.",
            "A conclusão do processo."
        ],
        correta: 2
    },
    {
        pergunta: "Qual é a função principal de um CLP?",
        alternativas: [
            "Controlar máquinas e processos.",
            "Editar imagens.",
            "Criar documentos.",
            "Navegar na internet."
        ],
        correta: 0
    },
    {
        pergunta: "Qual linguagem é utilizada em muitos projetos com CLP?",
        alternativas: ["HTML", "Ladder", "CSS", "SQL"],
        correta: 1
    },
    {
        pergunta: "Qual é um exemplo de automação residencial?",
        alternativas: [
            "Livro impresso.",
            "Caderno de anotações.",
            "Lâmpada inteligente.",
            "Quadro de papel."
        ],
        correta: 2
    },
    {
        pergunta: "Qual tecnologia está relacionada à Indústria 4.0?",
        alternativas: [
            "Internet das Coisas.",
            "Máquina de escrever.",
            "Papel carbono.",
            "Trabalho exclusivamente manual."
        ],
        correta: 0
    },
    {
        pergunta: "Qual é um dos benefícios da automação?",
        alternativas: [
            "Aumentar tarefas repetitivas.",
            "Reduzir a precisão.",
            "Impedir o controle dos processos.",
            "Melhorar a produtividade."
        ],
        correta: 3
    }
];


/* =========================================
   VARIÁVEIS DO CURSO
========================================= */

const CHAVE = "progressoAutomacaoNaPratica";

let progresso = JSON.parse(localStorage.getItem(CHAVE)) || {
    modulosConcluidos: [],
    etapasConcluidas: [],
    moduloAtual: 0,
    quizAtual: 0,
    respostasCorretas: 0,
    respostasErradas: 0,
    provaIniciada: false,
    provaConcluida: false,
    notaFinal: 0
};

let moduloAtual = 0;
let etapaAtual = 0;
let perguntaAtual = 0;
let respostaSelecionada = null;
let perguntaRespondida = false;
let provaAtual = 0;
let respostaProvaSelecionada = null;
let provaPerguntaRespondida = false;
let acertosProva = 0;


/* =========================================
   ELEMENTOS HTML
========================================= */

const listaModulos = document.getElementById("listaModulos");
const areaEstudo = document.getElementById("areaEstudo");
const conteudoEtapa = document.getElementById("conteudoEtapa");
const quizModulo = document.getElementById("quizModulo");
const conclusaoCurso = document.getElementById("conclusaoCurso");
const areaProva = document.getElementById("areaProva");
const areaCertificado = document.getElementById("areaCertificado");


/* =========================================
   SALVAR PROGRESSO
========================================= */

function salvarProgresso() {
    localStorage.setItem(CHAVE, JSON.stringify(progresso));
}


/* =========================================
   VERIFICAR MÓDULO DESBLOQUEADO
========================================= */

function moduloDesbloqueado(indice) {
    return indice === 0 ||
        progresso.modulosConcluidos.includes(indice - 1);
}


/* =========================================
   MOSTRAR MÓDULOS NA TELA
========================================= */

function mostrarModulos() {

    listaModulos.innerHTML = "";

    modulos.forEach((modulo, indice) => {

        const concluido = progresso.modulosConcluidos.includes(indice);
        const desbloqueado = moduloDesbloqueado(indice);

        const card = document.createElement("div");

        card.className = "modulo-card";

        if (!desbloqueado) {
            card.classList.add("modulo-bloqueado");
        }

        card.innerHTML = `
            <span class="modulo-numero">
                MÓDULO ${String(indice + 1).padStart(2, "0")}
            </span>

            <h3>${modulo.titulo}</h3>

            <p>${modulo.descricao}</p>

            <div class="modulo-detalhes">
                <span>3 etapas de aprendizagem</span>
                <span>20h de curso</span>
            </div>

            <div class="status-modulo">
                ${concluido ? "✓ Concluído" :
                    desbloqueado ? "● Disponível" : "🔒 Bloqueado"}
            </div>

            <button class="botao-principal"
                ${!desbloqueado ? "disabled" : ""}
                data-modulo="${indice}">
                ${concluido ? "Revisar módulo" :
                    desbloqueado ? "Acessar módulo →" : "Bloqueado"}
            </button>
        `;

        const botao = card.querySelector("button");

        botao.addEventListener("click", () => {
            abrirModulo(indice);
        });

        listaModulos.appendChild(card);

    });

    if (progresso.modulosConcluidos.length === modulos.length) {
        mostrarBotaoProva();
    }

    atualizarProgresso();
}


/* =========================================
   ABRIR MÓDULO
========================================= */

function abrirModulo(indice) {

    if (!moduloDesbloqueado(indice)) return;

    moduloAtual = indice;
    etapaAtual = 0;

    listaModulos.hidden = true;
    areaEstudo.hidden = false;
    conclusaoCurso.hidden = true;
    areaProva.hidden = true;
    areaCertificado.hidden = true;

    document.getElementById("numeroModulo").textContent =
        `MÓDULO ${indice + 1}`;

    document.getElementById("tituloModulo").textContent =
        modulos[indice].titulo;

    document.getElementById("descricaoModulo").textContent =
        modulos[indice].descricao;

    mostrarEtapa();
}


/* =========================================
   MOSTRAR ETAPA
========================================= */

function mostrarEtapa() {

    const modulo = modulos[moduloAtual];
    const etapa = modulo.etapas[etapaAtual];

    conteudoEtapa.hidden = false;
    quizModulo.hidden = true;
    conclusaoCurso.hidden = true;

    document.getElementById("numeroEtapa").textContent =
        `ETAPA ${etapaAtual + 1} DE ${modulo.etapas.length}`;

    document.getElementById("tituloEtapa").textContent =
        etapa.titulo;

    document.getElementById("subtituloEtapa").textContent =
        etapa.subtitulo;

    document.getElementById("textoEtapa").innerHTML =
        etapa.texto;

    const indicador = document.getElementById("indicadorEtapas");

    indicador.innerHTML = "";

    modulo.etapas.forEach((item, indice) => {

        const ponto = document.createElement("div");

        ponto.className = "etapa-ponto";

        if (indice <= etapaAtual) {
            ponto.classList.add("ativo");
        }

        indicador.appendChild(ponto);
    });

    document.getElementById("etapaAnterior").disabled =
        etapaAtual === 0;

    document.getElementById("proximaEtapa").textContent =
        etapaAtual === modulo.etapas.length - 1
            ? "Finalizar conteúdo →"
            : "Próxima etapa →";

    atualizarProgresso();
}


/* =========================================
   NAVEGAÇÃO ENTRE ETAPAS
========================================= */

document.getElementById("proximaEtapa").addEventListener("click", () => {

    if (etapaAtual < modulos[moduloAtual].etapas.length - 1) {

        etapaAtual++;
        marcarEtapaConcluida();
        mostrarEtapa();

    } else {

        marcarEtapaConcluida();
        abrirQuiz();
    }

});

document.getElementById("etapaAnterior").addEventListener("click", () => {

    if (etapaAtual > 0) {
        etapaAtual--;
        mostrarEtapa();
    }

});


/* =========================================
   REGISTRAR ETAPA CONCLUÍDA
========================================= */

function marcarEtapaConcluida() {

    const identificador = `${moduloAtual}-${etapaAtual}`;

    if (!progresso.etapasConcluidas.includes(identificador)) {
        progresso.etapasConcluidas.push(identificador);
    }

    salvarProgresso();
    atualizarProgresso();
}


/* =========================================
   ABRIR QUIZ DO MÓDULO
========================================= */

function abrirQuiz() {

    marcarEtapaConcluida();

    conteudoEtapa.hidden = true;
    quizModulo.hidden = false;

    perguntaAtual = 0;
    mostrarPerguntaQuiz();
}


/* =========================================
   MOSTRAR PERGUNTAS DO QUIZ
========================================= */

function mostrarPerguntaQuiz() {

    const perguntas = modulos[moduloAtual].quiz;
    const pergunta = perguntas[perguntaAtual];

    respostaSelecionada = null;
    perguntaRespondida = false;

    document.getElementById("numeroPergunta").textContent =
        `Pergunta ${perguntaAtual + 1} de ${perguntas.length}`;

    document.getElementById("perguntaEtapa").textContent =
        pergunta.pergunta;

    document.getElementById("feedbackQuiz").textContent = "";

    document.getElementById("responderQuiz").hidden = false;
    document.getElementById("responderQuiz").disabled = false;
    document.getElementById("proximaPergunta").hidden = true;

    const alternativas = document.getElementById("alternativasQuiz");

    alternativas.innerHTML = "";

    pergunta.alternativas.forEach((alternativa, indice) => {

        const label = document.createElement("label");

        label.className = "alternativa";

        label.innerHTML = `
            <input type="radio" name="respostaQuiz" value="${indice}">
            ${alternativa}
        `;

        label.querySelector("input").addEventListener("change", () => {
            respostaSelecionada = indice;
        });

        alternativas.appendChild(label);

    });

}


/* =========================================
   RESPONDER QUIZ
========================================= */

document.getElementById("responderQuiz").addEventListener("click", () => {

    if (respostaSelecionada === null || perguntaRespondida) return;

    const pergunta = modulos[moduloAtual].quiz[perguntaAtual];

    perguntaRespondida = true;

    const correta = respostaSelecionada === pergunta.correta;

    if (correta) {

        progresso.respostasCorretas++;

        document.getElementById("feedbackQuiz").textContent =
            "✓ Resposta correta! Muito bem!";

        document.getElementById("feedbackQuiz").style.color = "#21864b";

    } else {

        progresso.respostasErradas++;

        document.getElementById("feedbackQuiz").textContent =
            "✗ Resposta incorreta. A alternativa correta é: " +
            pergunta.alternativas[pergunta.correta];

        document.getElementById("feedbackQuiz").style.color = "#c0392b";

    }

    document.getElementById("responderQuiz").hidden = true;
    document.getElementById("proximaPergunta").hidden = false;

    salvarProgresso();

});


/* =========================================
   PRÓXIMA PERGUNTA DO QUIZ
========================================= */

document.getElementById("proximaPergunta").addEventListener("click", () => {

    perguntaAtual++;

    if (perguntaAtual < modulos[moduloAtual].quiz.length) {

        mostrarPerguntaQuiz();

    } else {

        concluirModulo();

    }

});


/* =========================================
   CONCLUIR MÓDULO
========================================= */

function concluirModulo() {

    if (!progresso.modulosConcluidos.includes(moduloAtual)) {
        progresso.modulosConcluidos.push(moduloAtual);
    }

    salvarProgresso();

    areaEstudo.hidden = true;
    conclusaoCurso.hidden = false;

    document.getElementById("continuarCurso").textContent =
        moduloAtual === modulos.length - 1
            ? "Ir para avaliação final →"
            : "Voltar aos módulos →";

    mostrarModulos();
}


/* =========================================
   CONTINUAR APÓS CONCLUIR MÓDULO
========================================= */

document.getElementById("continuarCurso").addEventListener("click", () => {

    conclusaoCurso.hidden = true;

    if (progresso.modulosConcluidos.length === modulos.length) {

        iniciarProva();

    } else {

        areaEstudo.hidden = true;
        listaModulos.hidden = false;

        mostrarModulos();
    }

});


/* =========================================
   VOLTAR PARA OS MÓDULOS
========================================= */

document.getElementById("voltarModulos").addEventListener("click", () => {

    areaEstudo.hidden = true;
    quizModulo.hidden = true;
    listaModulos.hidden = false;

    mostrarModulos();

});


/* =========================================
   ATUALIZAR PROGRESSO
========================================= */

function atualizarProgresso() {

    const totalEtapas = modulos.reduce(
        (total, modulo) => total + modulo.etapas.length,
        0
    );

    const totalConcluidas = progresso.etapasConcluidas.length;

    const porcentagem = Math.round(
        (totalConcluidas / totalEtapas) * 100
    );

    document.getElementById("porcentagem").textContent =
        `${porcentagem}%`;

    document.getElementById("barraProgresso").style.width =
        `${porcentagem}%`;

    document.getElementById("modulosConcluidos").textContent =
        progresso.modulosConcluidos.length;

    document.getElementById("etapasConcluidas").textContent =
        totalConcluidas;

}


/* =========================================
   LIBERAR AVALIAÇÃO FINAL
========================================= */

function mostrarBotaoProva() {

    if (document.getElementById("botaoProvaFinal")) return;

    const botao = document.createElement("button");

    botao.id = "botaoProvaFinal";
    botao.className = "botao-principal";
    botao.textContent = "Iniciar avaliação final →";

    botao.style.display = "block";
    botao.style.margin = "30px auto";

    botao.addEventListener("click", iniciarProva);

    listaModulos.appendChild(botao);
}


/* =========================================
   INICIAR PROVA FINAL
========================================= */

function iniciarProva() {

    listaModulos.hidden = true;
    areaEstudo.hidden = true;
    conclusaoCurso.hidden = true;
    areaProva.hidden = false;

    provaAtual = 0;
    acertosProva = 0;
    progresso.provaIniciada = true;

    salvarProgresso();

    mostrarPerguntaProva();
}


/* =========================================
   MOSTRAR QUESTÕES DA PROVA
========================================= */

function mostrarPerguntaProva() {

    const pergunta = provaFinal[provaAtual];

    respostaProvaSelecionada = null;
    provaPerguntaRespondida = false;

    document.getElementById("numeroProva").textContent =
        `Questão ${provaAtual + 1} de ${provaFinal.length}`;

    document.getElementById("perguntaProva").textContent =
        pergunta.pergunta;

    document.getElementById("feedbackProva").textContent = "";

    document.getElementById("responderProva").hidden = false;
    document.getElementById("responderProva").disabled = false;
    document.getElementById("proximaProva").hidden = true;

    const alternativas = document.getElementById("alternativasProva");

    alternativas.innerHTML = "";

    pergunta.alternativas.forEach((alternativa, indice) => {

        const label = document.createElement("label");

        label.className = "alternativa";

        label.innerHTML = `
            <input type="radio" name="respostaProva" value="${indice}">
            ${alternativa}
        `;

        label.querySelector("input").addEventListener("change", () => {
            respostaProvaSelecionada = indice;
        });

        alternativas.appendChild(label);

    });

}


/* =========================================
   RESPONDER PROVA FINAL
========================================= */

document.getElementById("responderProva").addEventListener("click", () => {

    if (respostaProvaSelecionada === null || provaPerguntaRespondida) return;

    provaPerguntaRespondida = true;

    const pergunta = provaFinal[provaAtual];

    const correta = respostaProvaSelecionada === pergunta.correta;

    if (correta) {

        acertosProva++;

        document.getElementById("feedbackProva").textContent =
            "✓ Resposta correta!";

        document.getElementById("feedbackProva").style.color = "#21864b";

    } else {

        document.getElementById("feedbackProva").textContent =
            "✗ Resposta incorreta. Correta: " +
            pergunta.alternativas[pergunta.correta];

        document.getElementById("feedbackProva").style.color = "#c0392b";

    }

    document.getElementById("responderProva").hidden = true;
    document.getElementById("proximaProva").hidden = false;

});


/* =========================================
   AVANÇAR NA PROVA
========================================= */

document.getElementById("proximaProva").addEventListener("click", () => {

    provaAtual++;

    if (provaAtual < provaFinal.length) {

        mostrarPerguntaProva();

    } else {

        finalizarProva();

    }

});


/* =========================================
   FINALIZAR PROVA
========================================= */

function finalizarProva() {

    const nota = Math.round((acertosProva / provaFinal.length) * 100);

    progresso.notaFinal = nota;

    progresso.provaConcluida = true;

    salvarProgresso();

    areaProva.hidden = true;

    if (nota >= 70) {

        areaCertificado.hidden = false;

        document.getElementById("dataConclusao").textContent =
            "Data de conclusão: " +
            new Date().toLocaleDateString("pt-BR");

    } else {

        areaProva.hidden = false;

        areaProva.innerHTML = `
            <div class="conclusao-card">
                <h2>Avaliação final concluída</h2>

                <p>
                    Você acertou ${acertosProva} de ${provaFinal.length} questões.
                </p>

                <h3>Nota: ${nota}%</h3>

                <p>
                    É necessário alcançar pelo menos 70% para concluir o curso.
                </p>

                <button id="refazerProva" class="botao-principal">
                    Refazer avaliação
                </button>
            </div>
        `;

        document.getElementById("refazerProva").addEventListener("click", () => {

            areaProva.innerHTML = `
                <span class="etiqueta-roxa">AVALIAÇÃO FINAL</span>
                <h2>Prova final do curso</h2>
                <p id="numeroProva"></p>
                <h3 id="perguntaProva"></h3>
                <div id="alternativasProva"></div>
                <p id="feedbackProva" class="feedback"></p>
                <button id="responderProva" class="botao-principal">Responder</button>
                <button id="proximaProva" class="botao-principal" hidden>Próxima questão →</button>
            `;

            adicionarEventosProva();
            iniciarProva();

        });

    }

}


/* =========================================
   RECRIAR EVENTOS DA PROVA
========================================= */

function adicionarEventosProva() {

    document.getElementById("responderProva").addEventListener("click", responderQuestaoProva);

    document.getElementById("proximaProva").addEventListener("click", avancarQuestaoProva);

}


/* =========================================
   EVENTOS INICIAIS DA PROVA
========================================= */

function responderQuestaoProva() {

    if (respostaProvaSelecionada === null || provaPerguntaRespondida) return;

    provaPerguntaRespondida = true;

    const pergunta = provaFinal[provaAtual];

    const correta = respostaProvaSelecionada === pergunta.correta;

    if (correta) {
        acertosProva++;

        document.getElementById("feedbackProva").textContent =
            "✓ Resposta correta!";

        document.getElementById("feedbackProva").style.color = "#21864b";

    } else {

        document.getElementById("feedbackProva").textContent =
            "✗ Resposta incorreta. Correta: " +
            pergunta.alternativas[pergunta.correta];

        document.getElementById("feedbackProva").style.color = "#c0392b";

    }

    document.getElementById("responderProva").hidden = true;
    document.getElementById("proximaProva").hidden = false;

}

function avancarQuestaoProva() {

    provaAtual++;

    if (provaAtual < provaFinal.length) {
        mostrarPerguntaProva();
    } else {
        finalizarProva();
    }

}


/* =========================================
   IMPRESSÃO DO CERTIFICADO
========================================= */

document.getElementById("imprimirCertificado").addEventListener("click", () => {
    window.print();
});


/* =========================================
   INICIALIZAÇÃO DO CURSO
========================================= */

mostrarModulos();
atualizarProgresso();
