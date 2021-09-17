document.addEventListener("DOMContentLoaded", () => {
    const menu = document.querySelector(".menu");
    const btnMenu_open = document.querySelector(".btnMenu_open");
    const btnMenu_close = document.querySelector(".btnMenu_close");

    btnMenu_open.addEventListener("click", () => {
        menu.classList.add("menu_open");
    });
    btnMenu_close.addEventListener("click", () => {
        menu.classList.remove("menu_open");
    });
});

function closeMenu() {
    document.querySelector(".menu").classList.remove("menu_open");
}