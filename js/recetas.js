document.addEventListener("DOMContentLoaded", function () {
    const menu = document.querySelector(".menu-horizontal");
    const abrirMenu = document.querySelector(".abrir-menu");
    const overlay = document.getElementById("overlay");

    abrirMenu.addEventListener("click", function () {
        menu.style.transform = "translateX(0)"; // Mostrar el menú
        overlay.style.display = "block"; 
        setTimeout(() => {
            overlay.style.opacity = "1";
        }, 10);
    });

    // Evitar que los clics dentro del menú cierren el overlay
    menu.addEventListener("click", function (event) {
        event.stopPropagation();
    });

    // Cerrar el menú solo si se hace clic en el overlay
    overlay.addEventListener("click", function () {
        menu.style.transform = "translateX(-100%)"; // Ocultar el menú
        overlay.style.opacity = "0";
        setTimeout(() => {
            overlay.style.display = "none";
        }, 300);
    });
});

