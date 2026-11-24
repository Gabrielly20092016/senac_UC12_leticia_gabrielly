//Pagina de cursos 

// PEGANDO OS ELEMENTOS DO HTML

const searchInput = document.getElementById("searchInput");

const filterButtons = document.querySelectorAll(".filter");

const courseCards = document.querySelectorAll(".course-card");

const emptyMessage = document.getElementById("emptyMessage");


// CATEGORIA SELECIONADA INICIALMENTE

let selectedCategory = "Todos";


// FUNÇÃO PARA FILTRAR OS CURSOS

function filterCourses() {

    const searchText = searchInput.value.toLowerCase().trim();

    let visibleCount = 0;

    courseCards.forEach((card) => {

        const title = card.dataset.title.toLowerCase();

        const category = card.dataset.category;

        // VERIFICA SE O TEXTO DIGITADO CORRESPONDE AO CURSO

        const matchesText =
            title.includes(searchText) ||
            category.toLowerCase().includes(searchText);

        // VERIFICA A CATEGORIA SELECIONADA

        const matchesCategory =
            selectedCategory === "Todos" ||
            category === selectedCategory;

        // VERIFICA SE O CURSO DEVE APARECER

        const showCard = matchesText && matchesCategory;

        card.style.display = showCard ? "block" : "none";

        if (showCard) {
            visibleCount++;
        }

    });

    // MOSTRA UMA MENSAGEM SE NENHUM CURSO FOR ENCONTRADO

    emptyMessage.style.display =
        visibleCount === 0 ? "block" : "none";

}


// EVENTO DE PESQUISA

searchInput.addEventListener("input", filterCourses);


// EVENTO DOS BOTÕES DE CATEGORIA

filterButtons.forEach((button) => {

    button.addEventListener("click", () => {

        // REMOVE A CLASSE ACTIVE DOS OUTROS BOTÕES

        filterButtons.forEach((item) => {
            item.classList.remove("active");
        });

        // ATIVA O BOTÃO CLICADO

        button.classList.add("active");

        // ATUALIZA A CATEGORIA SELECIONADA

        selectedCategory = button.dataset.filter;

        // ATUALIZA OS CURSOS

        filterCourses();

    });

});


// FUNÇÃO DO BOTÃO SAIBA MAIS

function showCourse(courseName) {

    alert(
        "Você selecionou: " + courseName +
        "\n\nA página com os detalhes deste curso pode ser adicionada nesta etapa."
    );

}


