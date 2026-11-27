/* ---------- CONTEÚDO DOS CURSOS ---------- */

const courses = {

    tecnologia: {
        title: "Introdução à tecnologia e sistemas industriais",
        category: "TECNOLOGIA E INDÚSTRIA",
        description: "Conheça os fundamentos da tecnologia, dos sistemas industriais e das ferramentas que ajudam a transformar os processos de produção.",
        duration: "20h",
        level: "Básico",
        modules: [
            
            {
                title: "Introdução à tecnologia industrial",
                text: "A tecnologia industrial reúne conhecimentos, equipamentos e sistemas utilizados para melhorar os processos produtivos. Ela permite desenvolver atividades com mais organização, precisão e eficiência.",
                practical: "Em uma fábrica, computadores e equipamentos digitais podem auxiliar no planejamento da produção, no controle de materiais e no acompanhamento das atividades.",
                tip: "A tecnologia contribui para melhorar a produtividade, reduzir erros e facilitar o trabalho dos profissionais.",
                question: "Qual é uma das principais contribuições da tecnologia industrial?",
                options: [
                    "Dificultar os processos produtivos",
                    "Melhorar a eficiência e a organização",
                    "Eliminar o planejamento"
                ],
                answer: 1
            },
            
            {
                title: "Sistemas e equipamentos industriais",
                text: "Os sistemas industriais são formados por equipamentos, máquinas e ferramentas que trabalham em conjunto para realizar diferentes atividades. Cada equipamento possui uma função dentro do processo produtivo.",
                practical: "Uma esteira transportadora, por exemplo, movimenta produtos entre diferentes etapas da fabricação, facilitando o trabalho e organizando o fluxo de produção.",
                tip: "Conhecer a função de cada equipamento ajuda a utilizar os recursos corretamente e evitar falhas.",
                question: "Qual é a função de uma esteira transportadora?",
                options: [
                    "Transportar produtos entre etapas",
                    "Realizar pagamentos",
                    "Controlar documentos financeiros"
                ],
                answer: 0
            },
            
            {
                title: "Tecnologia e inovação nos processos",
                text: "A inovação industrial acontece quando novas ferramentas, técnicas ou soluções são utilizadas para melhorar as atividades de uma empresa. Sistemas digitais permitem acompanhar informações e identificar oportunidades de melhoria.",
                practical: "Um sistema informatizado pode registrar a quantidade de produtos fabricados e ajudar os responsáveis a acompanhar os resultados da produção.",
                tip: "A inovação deve buscar melhorias reais nos processos, considerando qualidade, segurança e produtividade.",
                question: "Para que servem os sistemas informatizados na indústria?",
                options: [
                    "Substituir todos os profissionais",
                    "Eliminar os registros",
                    "Registrar informações e acompanhar resultados"
                ],
                answer: 2
            }
        ]
    },

    automacao: {
        title: "Automação na prática",
        category: "AUTOMAÇÃO",
        description: "Entenda como máquinas, sensores e sistemas de controle automatizam tarefas e contribuem para processos industriais mais eficientes.",
        duration: "32h",
        level: "Básico",
        modules: [
            
            {
                title: "Fundamentos da automação",
                text: "Automação é o uso de tecnologias, máquinas e sistemas de controle para executar tarefas com menor intervenção manual. Na indústria, ela aumenta a regularidade das operações e facilita o acompanhamento dos processos.",
                practical: "Uma esteira pode transportar produtos automaticamente entre etapas, enquanto sensores identificam a passagem de cada item.",
                tip: "Automatizar não significa dispensar supervisão: os processos precisam ser acompanhados por profissionais capacitados.",
                question: "O que caracteriza um processo automatizado?",
                options: [
                    "A realização de todas as tarefas manualmente",
                    "O uso de sistemas para executar tarefas automaticamente",
                    "A ausência de equipamentos"
                ],
                answer: 1
            },
            
            {
                title: "Sensores e sistemas de controle",
                text: "Sensores são dispositivos que identificam alterações no ambiente, como presença, temperatura, distância e movimento. Eles enviam informações para sistemas que podem controlar máquinas e equipamentos.",
                practical: "Um sensor de presença pode identificar um produto na esteira e enviar um sinal para que determinada máquina execute uma atividade.",
                tip: "Os sensores ajudam a monitorar os processos e permitem respostas mais rápidas às mudanças.",
                question: "Qual é a principal função de um sensor?",
                options: [
                    "Identificar informações e alterações no ambiente",
                    "Armazenar produtos",
                    "Substituir o sistema elétrico"
                ],
                answer: 0
            },
            
            {
                title: "Aplicações da automação industrial",
                text: "A automação pode ser aplicada em diferentes etapas da produção, como movimentação, montagem, embalagem e inspeção. Robôs industriais e equipamentos programáveis são exemplos dessas tecnologias.",
                practical: "Na fabricação de chocolates, equipamentos automatizados podem auxiliar na dosagem, mistura, moldagem e embalagem dos produtos.",
                tip: "A manutenção e o acompanhamento dos equipamentos são fundamentais para garantir o funcionamento adequado.",
                question: "Qual atividade pode utilizar automação industrial?",
                options: [
                    "Somente atividades administrativas",
                    "Apenas reuniões",
                    "Montagem e embalagem de produtos"
                ],
                answer: 2
            }
        ]
    },

    seguranca: {
        title: "Segurança no ambiente industrial",
        category: "SEGURANÇA",
        description: "Aprenda a identificar riscos, prevenir acidentes e adotar práticas seguras no ambiente de trabalho industrial.",
        duration: "32h",
        level: "Básico",
        modules: [
            
            {
                title: "Fundamentos da segurança industrial",
                text: "A segurança industrial reúne medidas e procedimentos destinados a proteger os trabalhadores, os equipamentos e o ambiente de trabalho. Seu objetivo é prevenir acidentes e reduzir situações de risco.",
                practical: "Antes de iniciar uma atividade, o profissional deve observar o ambiente, identificar possíveis perigos e seguir as orientações de segurança.",
                tip: "A prevenção deve fazer parte da rotina de todos os profissionais, independentemente da função exercida.",
                question: "Qual é o principal objetivo da segurança industrial?",
                options: [
                    "Aumentar a velocidade das atividades",
                    "Prevenir acidentes e proteger os trabalhadores",
                    "Reduzir os procedimentos de segurança"
                ],
                answer: 1
            },
            
            {
                title: "Equipamentos de proteção individual",
                text: "Os equipamentos de proteção individual, conhecidos como EPIs, são utilizados para reduzir a exposição dos trabalhadores a determinados riscos. Os equipamentos devem ser adequados à atividade realizada.",
                practical: "Luvas, óculos de proteção, protetores auriculares e calçados de segurança são exemplos de EPIs utilizados em diferentes ambientes industriais.",
                tip: "Utilizar corretamente os EPIs e verificar suas condições de conservação é essencial para a proteção individual.",
                question: "O que significa a sigla EPI?",
                options: [
                    "Equipamento de Proteção Individual",
                    "Estrutura de Produção Industrial",
                    "Estação de Processamento Interno"
                ],
                answer: 0
            },
            
            {
                title: "Prevenção de riscos e acidentes",
                text: "Os riscos ocupacionais podem estar relacionados a máquinas, eletricidade, produtos químicos, ruídos e condições inadequadas do ambiente. Identificar esses perigos permite adotar medidas preventivas.",
                practical: "Manter corredores livres, sinalizar áreas de risco e comunicar equipamentos com defeito são atitudes que ajudam a prevenir acidentes.",
                tip: "Situações perigosas devem ser comunicadas aos responsáveis. Nunca improvise soluções para equipamentos ou instalações com problemas.",
                question: "O que deve ser feito ao identificar uma situação de risco?",
                options: [
                    "Ignorar o problema",
                    "Continuar trabalhando normalmente",
                    "Comunicar o responsável e seguir os procedimentos de segurança"
                ],
                answer: 2
            }
        ]
    },

    industria: {
        title: "Fundamentos da Indústria 4.0",
        category: "INDÚSTRIA 4.0",
        description: "Descubra como a integração de tecnologias digitais transforma os processos industriais e cria novas possibilidades para a produção.",
        duration: "24h",
        level: "Básico",
        modules: [
            
            {
                title: "O conceito de Indústria 4.0",
                text: "A Indústria 4.0 representa uma nova etapa da evolução industrial, caracterizada pela integração de tecnologias digitais, conectividade, automação e análise de dados.",
                practical: "Uma fábrica pode utilizar sistemas conectados para acompanhar máquinas, controlar a produção e compartilhar informações entre diferentes setores.",
                tip: "A Indústria 4.0 busca integrar pessoas, máquinas e informações para tornar a produção mais inteligente.",
                question: "O que caracteriza a Indústria 4.0?",
                options: [
                    "A ausência de tecnologia",
                    "A integração de tecnologias digitais e sistemas conectados",
                    "O abandono dos processos industriais"
                ],
                answer: 1
            },
            
            {
                title: "Tecnologias da transformação digital",
                text: "Entre as tecnologias da Indústria 4.0 estão a Internet das Coisas (IoT), inteligência artificial, computação em nuvem, robótica e análise de dados. Essas ferramentas permitem conectar equipamentos e acompanhar informações.",
                practical: "Sensores conectados podem enviar dados sobre a temperatura de uma máquina para um sistema que acompanha seu funcionamento.",
                tip: "As tecnologias digitais trabalham em conjunto para melhorar o controle e a tomada de decisões.",
                question: "O que é a Internet das Coisas (IoT)?",
                options: [
                    "Uma ferramenta de edição de textos",
                    "Um equipamento de proteção",
                    "A conexão de dispositivos à internet para troca de informações"
                ],
                answer: 2
            },
            
            {
                title: "Benefícios e desafios da Indústria 4.0",
                text: "A transformação digital pode melhorar a produtividade, facilitar o monitoramento e reduzir falhas. Entretanto, exige planejamento, investimento, capacitação profissional e cuidados com a segurança das informações.",
                practical: "Uma empresa que utiliza sensores e análise de dados pode identificar alterações no funcionamento de uma máquina antes que uma falha interrompa a produção.",
                tip: "A tecnologia precisa estar acompanhada de profissionais preparados e processos bem planejados.",
                question: "Qual é um benefício da Indústria 4.0?",
                options: [
                    "Melhorar o monitoramento e a produtividade",
                    "Impedir a troca de informações",
                    "Eliminar a necessidade de planejamento"
                ],
                answer: 0
            }
        ]
    },

    chocolates: {
        title: "Produção e fabricação de chocolates",
        category: "ALIMENTOS",
        description: "Conheça as principais etapas da fabricação de chocolates, desde a seleção dos ingredientes até o produto final.",
        duration: "30h",
        level: "Básico",
        modules: [
            
            {
                title: "Matérias-primas e ingredientes",
                text: "A fabricação de chocolates começa com a seleção das matérias-primas. O cacau é um dos principais ingredientes, podendo ser utilizado na forma de massa, manteiga e outros derivados.",
                practical: "Antes da produção, os ingredientes são selecionados, pesados e conferidos para garantir que atendam às características necessárias para a receita.",
                tip: "A qualidade dos ingredientes influencia diretamente o sabor, a textura e as características do chocolate.",
                question: "Qual ingrediente é fundamental na fabricação do chocolate?",
                options: [
                    "Farinha de trigo",
                    "Cacau e seus derivados",
                    "Sal refinado"
                ],
                answer: 1
            },
            
            {
                title: "Etapas do processo de fabricação",
                text: "A fabricação envolve diferentes etapas, como mistura dos ingredientes, refino, conchagem, temperagem e moldagem. Cada fase contribui para desenvolver as características do produto.",
                practical: "Na temperagem, o chocolate passa por um controle de temperatura que ajuda a desenvolver brilho, textura e boa estrutura após a solidificação.",
                tip: "O controle de temperatura e o cumprimento das etapas são importantes para obter um chocolate de qualidade.",
                question: "Qual é a finalidade da temperagem?",
                options: [
                    "Controlar a cristalização da manteiga de cacau",
                    "Adicionar embalagens ao produto",
                    "Retirar todos os ingredientes"
                ],
                answer: 0
            },
            
            {
                title: "Controle de qualidade e embalagem",
                text: "Depois da fabricação, os chocolates passam por verificações para avaliar aparência, textura, peso e condições de embalagem. O armazenamento também deve respeitar as condições adequadas.",
                practical: "Durante a inspeção, os produtos podem ser avaliados para identificar alterações de aparência, embalagens danificadas ou problemas de identificação.",
                tip: "A embalagem protege o chocolate e ajuda a preservar suas características durante o armazenamento e transporte.",
                question: "Por que o controle de qualidade é importante?",
                options: [
                    "Para aumentar o desperdício",
                    "Para dispensar as inspeções",
                    "Para verificar se o produto atende aos padrões estabelecidos"
                ],
                answer: 2
            }
        ]
    },

    alimentos: {
        title: "Boas práticas na fabricação de alimentos",
        category: "ALIMENTOS",
        description: "Aprenda procedimentos de higiene, manipulação e controle necessários para garantir a qualidade e a segurança dos alimentos.",
        duration: "20h",
        level: "Básico",
        modules: [
            
            {
                title: "Higiene pessoal e manipulação",
                text: "A higiene pessoal é fundamental para evitar a contaminação dos alimentos. Os manipuladores devem manter as mãos limpas, utilizar vestimentas adequadas e seguir os procedimentos de higiene.",
                practical: "Antes de iniciar a manipulação, é necessário higienizar corretamente as mãos, utilizar os equipamentos de proteção indicados e manter os utensílios limpos.",
                tip: "A higiene deve ser mantida durante todas as etapas da manipulação dos alimentos.",
                question: "Por que a higiene das mãos é importante?",
                options: [
                    "Para melhorar a aparência das embalagens",
                    "Para reduzir o risco de contaminação dos alimentos",
                    "Para acelerar o armazenamento"
                ],
                answer: 1
            },
            
            {
                title: "Contaminação e conservação dos alimentos",
                text: "Os alimentos podem sofrer contaminação física, química ou biológica. O armazenamento correto, a limpeza dos equipamentos e o controle das condições ambientais ajudam a evitar esses problemas.",
                practical: "Guardar alimentos em recipientes identificados e respeitar as condições de temperatura são medidas importantes para conservar os produtos.",
                tip: "Alimentos devem ser armazenados de maneira adequada e protegidos contra fontes de contaminação.",
                question: "Quais são os tipos de contaminação dos alimentos?",
                options: [
                    "Física, química e biológica",
                    "Visual, sonora e digital",
                    "Natural, artificial e industrial"
                ],
                answer: 0
            },
            
            {
                title: "Boas práticas e controle de qualidade",
                text: "As boas práticas de fabricação estabelecem procedimentos de higiene, organização, controle e manipulação para garantir alimentos seguros. A limpeza dos ambientes e o acompanhamento dos processos são fundamentais.",
                practical: "Uma equipe pode utilizar listas de verificação para acompanhar a limpeza, a organização e as condições de armazenamento dos produtos.",
                tip: "A qualidade dos alimentos depende da aplicação constante de procedimentos adequados em todas as etapas da produção.",
                question: "Qual é o objetivo das boas práticas de fabricação?",
                options: [
                    "Reduzir a organização da produção",
                    "Aumentar o desperdício",
                    "Garantir condições adequadas de higiene e segurança"
                ],
                answer: 2
            }
        ]
    },

    logistica: {
        title: "Logística e controle de estoque",
        category: "TECNOLOGIA E OPERAÇÕES",
        description: "Entenda como organizar materiais, acompanhar movimentações e manter o estoque disponível para as operações.",
        duration: "24h",
        level: "Básico",
        modules: [
            
            {
                title: "Fundamentos da logística",
                text: "Logística é o conjunto de atividades que planeja e acompanha o fluxo de materiais, produtos e informações. Ela conecta etapas como recebimento, armazenagem, separação e expedição.",
                practical: "Uma operação logística organizada busca disponibilizar o item correto, na quantidade necessária, no local e no momento adequados, considerando custos e qualidade do atendimento.",
                tip: "O fluxo de materiais deve ser registrado e acompanhado. Informações corretas ajudam diferentes setores a planejar compras, produção e entregas.",
                question: "Qual é o objetivo da logística?",
                options: [
                    "Organizar o fluxo de materiais, produtos e informações",
                    "Aumentar movimentações sem planejamento",
                    "Eliminar registros"
                ],
                answer: 0
            },
            
            {
                title: "Recebimento e armazenagem de materiais",
                text: "No recebimento, os materiais devem ser conferidos com os documentos e pedidos. É importante verificar quantidade, identificação, integridade das embalagens e possíveis divergências.",
                practical: "A armazenagem deve considerar características do produto, condições ambientais, segurança e facilidade de localização. Códigos de localização ajudam a encontrar os itens.",
                tip: "Materiais devem ser identificados e guardados no local definido. Divergências no recebimento precisam ser registradas e comunicadas.",
                question: "O que deve ser conferido no recebimento?",
                options: [
                    "Somente a cor das caixas",
                    "Quantidade, identificação e integridade",
                    "Apenas o espaço disponível"
                ],
                answer: 1
            },
            
            {
                title: "Controle de estoque e movimentações",
                text: "O estoque representa os materiais disponíveis para atender às necessidades da operação. Entradas, saídas, devoluções e ajustes devem ser registrados para manter os saldos confiáveis.",
                practical: "O método PEPS (primeiro que entra, primeiro que sai) prioriza a saída dos itens recebidos primeiro, quando aplicável. O inventário compara a quantidade física com os registros do sistema.",
                tip: "Registre cada movimentação no momento em que ocorrer, investigue diferenças e acompanhe itens com baixo saldo ou excesso.",
                question: "O que significa PEPS?",
                options: [
                    "Produto especial para separação",
                    "Planejamento de expedição por setor",
                    "Primeiro que entra, primeiro que sai"
                ],
                answer: 2
            }
        ]
    },

    qualidade: {
        title: "Gestão da qualidade na indústria",
        category: "INDÚSTRIA 4.0",
        description: "Conheça os princípios da gestão da qualidade e aprenda como acompanhar processos e melhorar os resultados industriais.",
        duration: "24h",
        level: "Básico",
        modules: [
            
            {
                title: "Fundamentos da gestão da qualidade",
                text: "A gestão da qualidade reúne práticas e procedimentos que ajudam a garantir que produtos e serviços atendam aos requisitos estabelecidos. Ela envolve planejamento, acompanhamento e melhoria dos processos.",
                practical: "Uma indústria pode estabelecer padrões de produção e verificar se os produtos fabricados atendem às especificações definidas.",
                tip: "A qualidade deve ser acompanhada durante todo o processo produtivo, e não apenas no produto final.",
                question: "Qual é o objetivo da gestão da qualidade?",
                options: [
                    "Aumentar o desperdício",
                    "Garantir que produtos atendam aos requisitos estabelecidos",
                    "Eliminar os controles"
                ],
                answer: 1
            },
            
            {
                title: "Inspeção e controle de processos",
                text: "O controle de qualidade envolve verificações realizadas durante a produção para identificar falhas e desvios. Inspeções e registros ajudam a acompanhar os resultados.",
                practical: "Na fabricação de chocolates, uma equipe pode verificar peso, aparência, embalagem e identificação dos produtos antes da liberação.",
                tip: "Identificar problemas durante a produção facilita a correção e evita que produtos inadequados avancem no processo.",
                question: "Para que serve a inspeção de qualidade?",
                options: [
                    "Identificar falhas e verificar os padrões",
                    "Aumentar os erros de produção",
                    "Substituir o planejamento"
                ],
                answer: 0
            },
            
            {
                title: "Melhoria contínua e resultados",
                text: "A melhoria contínua busca aperfeiçoar processos por meio da análise de resultados, identificação de problemas e aplicação de ações corretivas e preventivas.",
                practical: "Uma empresa pode analisar registros de defeitos, identificar suas causas e implementar mudanças para reduzir a quantidade de produtos não conformes.",
                tip: "A melhoria contínua depende do acompanhamento dos resultados e da participação das equipes.",
                question: "O que é melhoria contínua?",
                options: [
                    "Repetir os mesmos erros",
                    "Ignorar os resultados",
                    "Buscar aperfeiçoamentos constantes nos processos"
                ],
                answer: 2
            }
        ]
    }

};


/* ---------- IDENTIFICAÇÃO DO CURSO ---------- */

const courseId = document.body.dataset.course;
const course = courses[courseId];
const main = document.getElementById("courseContent");


/* ---------- PERGUNTAS COMPLEMENTARES ---------- */

const extraQuestions = [
    {
        question: "Qual atitude contribui para o bom funcionamento de uma empresa?",
        options: [
            "Ignorar os procedimentos",
            "Seguir orientações e acompanhar as atividades",
            "Evitar a comunicação"
        ],
        answer: 1
    },
    {
        question: "Por que é importante registrar as atividades realizadas?",
        options: [
            "Para dificultar o trabalho",
            "Para eliminar informações",
            "Para acompanhar os processos e identificar problemas"
        ],
        answer: 2
    }
];


/* ---------- CRIAÇÃO DAS QUESTÕES ---------- */

function createQuestion(question, index, prefix) {

    const name = `${prefix}${index + 1}`;

    return `
        <fieldset class="question">
            <legend>${index + 1}. ${question.question}</legend>

            ${question.options.map((option, optionIndex) => `
                <label class="option">
                    <input
                        type="radio"
                        name="${name}"
                        value="${optionIndex}"
                    >
                    <span>${option}</span>
                </label>
            `).join("")}
        </fieldset>
    `;
}


/* ---------- MONTAGEM DO QUIZ E DA PROVA ---------- */

function getQuestions() {

    const moduleQuestions = course.modules.map(module => ({
        question: module.question,
        options: module.options,
        answer: module.answer
    }));

    const quiz = [
        ...moduleQuestions,
        extraQuestions[0]
    ];

    const exam = [
        ...moduleQuestions,
        extraQuestions[0],
        extraQuestions[1]
    ];

    return { quiz, exam };
}


/* ---------- CARREGAMENTO DO CURSO ---------- */

function renderCourse() {

    const { quiz, exam } = getQuestions();

    main.innerHTML = `

        <section class="hero">

            <div class="hero-copy">

                <span class="eyebrow">
                    ${course.category}
                </span>

                <h1>${course.title}</h1>

                <p>${course.description}</p>

                <div class="facts">
                    <span>◷ Carga horária: ${course.duration}</span>
                    <span>▥ Nível: ${course.level}</span>
                    <span>✓ 3 módulos</span>
                </div>

                <a class="primary-link" href="#conteudo">
                    Começar curso <span>→</span>
                </a>

            </div>

            <div class="hero-art" aria-hidden="true">
                ✦
                <div class="art-circle"></div>
            </div>

        </section>

        <div class="container">

            <section class="progress-card">

                <div class="progress-heading">

                    <div>
                        <span class="section-kicker">ACOMPANHAMENTO</span>
                        <h2>Seu progresso</h2>
                    </div>

                    <strong id="progressText">0% concluído</strong>

                </div>

                <div class="progress-track">
                    <div id="progressBar"></div>
                </div>

                <p id="progressDetail">
                    0 de 3 aulas concluídas
                </p>

            </section>


            <section id="conteudo" class="content-section">

                <div class="section-heading">

                    <span class="section-kicker">
                        TRILHA DE APRENDIZAGEM
                    </span>

                    <h2>Conteúdo do curso</h2>

                    <p>
                        Leia os materiais e marque cada módulo quando terminar.
                    </p>

                </div>

                ${course.modules.map((module, index) => `

                    <article class="lesson" id="modulo-${index + 1}">

                        <div class="lesson-top">

                            <span class="module-tag">
                                MÓDULO 0${index + 1}
                            </span>

                            <span class="lesson-time">
                                Parte ${index + 1} de 3
                            </span>

                        </div>

                        <h3>${module.title}</h3>

                        <p>${module.text}</p>

                        <h4>Entenda na prática</h4>

                        <p>${module.practical}</p>

                        <div class="tip">
                            <strong>Para lembrar:</strong>
                            ${module.tip}
                        </div>

                        <div class="video-placeholder">

                            <span class="play">▶</span>

                            <div>
                                <strong>
                                    Videoaula do módulo ${index + 1}
                                </strong>

                                <small>
                                    Espaço reservado para inserir o link do vídeo.
                                </small>
                            </div>

                        </div>

                        <button
                            class="complete-btn"
                            type="button"
                            data-lesson="${index + 1}"
                        >
                            Marcar aula como concluída
                        </button>

                    </article>

                `).join("")}

            </section>


            <section class="assessment" id="quiz">

                <span class="section-kicker">
                    REVISÃO DOS MÓDULOS
                </span>

                <h2>Quiz de aprendizagem</h2>

                <p>
                    Responda às quatro questões para conferir o que aprendeu.
                    É necessário acertar pelo menos três.
                </p>

                <form id="quizForm">

                    ${quiz.map((question, index) =>
                        createQuestion(question, index, "q")
                    ).join("")}

                    <button class="purple-btn" type="submit">
                        Corrigir quiz
                    </button>

                    <p class="result" id="quizResult" aria-live="polite"></p>

                </form>

            </section>


            <section class="assessment" id="prova">

                <span class="section-kicker">
                    ETAPA FINAL
                </span>

                <h2>Prova final</h2>

                <p>
                    Responda às cinco questões.
                    É necessário acertar pelo menos quatro para ser aprovado.
                </p>

                <form id="examForm">

                    ${exam.map((question, index) =>
                        createQuestion(question, index, "p")
                    ).join("")}

                    <button class="purple-btn" type="submit">
                        Finalizar avaliação
                    </button>

                    <p class="result" id="examResult" aria-live="polite"></p>

                </form>

            </section>


            <section class="certificate">

                <div>

                    <span class="section-kicker">
                        SUA CONQUISTA
                    </span>

                    <h2>Certificado de conclusão</h2>

                    <p id="certificateMessage">
                        Conclua os três módulos, seja aprovado no quiz
                        e na prova final para liberar seu certificado demonstrativo.
                    </p>

                </div>

                <button id="certificateButton" type="button" disabled>
                    Acessar certificado
                </button>

            </section>


            <p class="disclaimer">
                Este é um curso demonstrativo. O certificado gerado
                não possui validade oficial do Senac ou da Garoto.
            </p>

        </div>

    `;

    initializeCourse();
}


/* ---------- SALVAMENTO DO PROGRESSO ---------- */

function initializeCourse() {

    const storageKey = `senac-garoto-${courseId}`;

    let savedProgress = JSON.parse(
        localStorage.getItem(storageKey)
    ) || {
        completed: [],
        quizPassed: false,
        examPassed: false
    };

    const buttons = document.querySelectorAll(".complete-btn");

    buttons.forEach(button => {

        const lessonNumber = Number(button.dataset.lesson);

        if (savedProgress.completed.includes(lessonNumber)) {
            button.classList.add("done");
            button.textContent = "✓ Aula concluída";
        }

        button.addEventListener("click", () => {

            if (savedProgress.completed.includes(lessonNumber)) {
                savedProgress.completed =
                    savedProgress.completed.filter(
                        number => number !== lessonNumber
                    );

                button.classList.remove("done");
                button.textContent = "Marcar aula como concluída";

            } else {

                savedProgress.completed.push(lessonNumber);

                button.classList.add("done");
                button.textContent = "✓ Aula concluída";

            }

            saveProgress();
            updateProgress();

        });

    });


    /* ---------- ATUALIZAÇÃO DA BARRA DE PROGRESSO ---------- */

    function updateProgress() {

        const completed = savedProgress.completed.length;

        const percentage = Math.round(
            (completed / 3) * 100
        );

        document.getElementById("progressBar").style.width =
            `${percentage}%`;

        document.getElementById("progressText").textContent =
            `${percentage}% concluído`;

        document.getElementById("progressDetail").textContent =
            `${completed} de 3 aulas concluídas`;

        updateCertificate();

    }


    /* ---------- SALVAR INFORMAÇÕES ---------- */

    function saveProgress() {

        localStorage.setItem(
            storageKey,
            JSON.stringify(savedProgress)
        );

    }


    /* ---------- CORRIGIR AVALIAÇÕES ---------- */

    function correctAssessment(formId, resultId, questions, minimum, type) {

        const form = document.getElementById(formId);
        const result = document.getElementById(resultId);

        form.addEventListener("submit", event => {

            event.preventDefault();

            const answers = new FormData(form);

            let score = 0;

            for (let index = 0; index < questions.length; index++) {

                const answer = answers.get(`${type}${index + 1}`);

                if (answer === null) {

                    result.textContent =
                        "Responda todas as questões antes de finalizar.";

                    result.className = "result error";

                    return;
                }

                if (Number(answer) === questions[index].answer) {
                    score++;
                }

            }

            if (score >= minimum) {

                result.textContent =
                    `Parabéns! Você acertou ${score} de ${questions.length} questões. Aprovado!`;

                result.className = "result success";

                if (type === "q") {
                    savedProgress.quizPassed = true;
                } else {
                    savedProgress.examPassed = true;
                }

            } else {

                result.textContent =
                    `Você acertou ${score} de ${questions.length} questões. É necessário acertar pelo menos ${minimum}. Tente novamente!`;

                result.className = "result error";

                if (type === "q") {
                    savedProgress.quizPassed = false;
                } else {
                    savedProgress.examPassed = false;
                }

            }

            saveProgress();
            updateCertificate();

        });

    }


    const { quiz, exam } = getQuestions();

    correctAssessment(
        "quizForm",
        "quizResult",
        quiz,
        3,
        "q"
    );

    correctAssessment(
        "examForm",
        "examResult",
        exam,
        4,
        "p"
    );


    /* ---------- LIBERAÇÃO DO CERTIFICADO ---------- */

    function updateCertificate() {

        const completed = savedProgress.completed.length === 3;

        const approved =
            savedProgress.quizPassed &&
            savedProgress.examPassed;

        const unlocked = completed && approved;

        const button = document.getElementById("certificateButton");

        const message = document.getElementById("certificateMessage");

        button.disabled = !unlocked;

        if (unlocked) {

            message.textContent =
                "Parabéns! Você concluiu todos os módulos e foi aprovado nas avaliações. Seu certificado demonstrativo está disponível.";

            button.textContent = "Acessar certificado";

        } else {

            const pending = [];

            if (!completed) {
                pending.push("os três módulos");
            }

            if (!savedProgress.quizPassed) {
                pending.push("a aprovação no quiz");
            }

            if (!savedProgress.examPassed) {
                pending.push("a aprovação na prova final");
            }

            message.textContent =
                `Para liberar seu certificado, você precisa concluir ${pending.join(", ")}.`;

            button.textContent = "Certificado bloqueado";

        }

    }


    /* ---------- GERAR CERTIFICADO ---------- */

    document.getElementById("certificateButton").addEventListener(
        "click",
        () => {

            if (
                savedProgress.completed.length !== 3 ||
                !savedProgress.quizPassed ||
                !savedProgress.examPassed
            ) {
                return;
            }

            const certificate = document.createElement("div");

            certificate.className = "print-certificate";

            certificate.innerHTML = `

                <span class="section-kicker">
                    SENAC + GAROTO
                </span>

                <h1>Certificado de Conclusão</h1>

                <p>Certificamos que</p>

                <h2>Participante do curso</h2>

                <p>Concluiu satisfatoriamente o curso demonstrativo:</p>

                <h2>${course.title}</h2>

                <p>Carga horária: ${course.duration}</p>

                <p>Nível: ${course.level}</p>

                <p>Três módulos concluídos e avaliações aprovadas.</p>

                <p>Ambiente demonstrativo Senac + Garoto</p>

                <p>Certificado sem validade oficial.</p>

            `;

            document.body.appendChild(certificate);

            window.print();

            certificate.remove();

        }
    );


    /* ---------- INICIAR INFORMAÇÕES ---------- */

    updateProgress();

}

if (!course || !main) {
    console.error("Curso não encontrado. Verifique o atributo data-course.");
} else {
    document.title = `${course.title} | Senac + Garoto`;
    renderCourse();
}