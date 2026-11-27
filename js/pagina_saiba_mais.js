
const menuButton = document.querySelector(".menu-btn");
const navigation = document.querySelector("#nav");

// ABRIR E FECHAR MENU MOBILE

menuButton.addEventListener("click", () => {

    const isOpen = navigation.classList.toggle("open");

    menuButton.setAttribute("aria-expanded", isOpen);

    menuButton.setAttribute(
        "aria-label",
        isOpen ? "Fechar menu" : "Abrir menu"
    );

});

// FECHAR MENU AO CLICAR EM UM LINK

const navigationLinks = navigation.querySelectorAll("a");

navigationLinks.forEach(link => {

    link.addEventListener("click", () => {

        navigation.classList.remove("open");

        menuButton.setAttribute("aria-expanded", "false");

        menuButton.setAttribute("aria-label", "Abrir menu");

    });

});

// FECHAR MENU AO REDIMENSIONAR PARA DESKTOP

window.addEventListener("resize", () => {

    if (window.innerWidth > 760) {

        navigation.classList.remove("open");

        menuButton.setAttribute("aria-expanded", "false");

        menuButton.setAttribute("aria-label", "Abrir menu");

    }

});
