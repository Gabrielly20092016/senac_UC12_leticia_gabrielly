
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
