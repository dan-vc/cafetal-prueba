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

document.addEventListener("DOMContentLoaded", function () {
    // Selecciona el overlay exclusivo del modal
    const modalOverlay = document.getElementById("modal-overlay");
    // Selecciona el contenedor del modal (block-4)
    const modalContainer = document.querySelector(".block-4");
    // Selecciona el contenido del modal (espresso-modal)
    const modalContent = document.querySelector(".espresso-modal");
    // Selecciona todos los botones "VER MÁS" (con clase "see-more")
    const seeMoreButtons = document.querySelectorAll(".see-more");

    // Función para mostrar el modal y el overlay
    function openModal() {
        // Muestra el contenedor modal (flex para centrarlo)
        modalContainer.style.display = "flex";
        // Muestra el overlay exclusivo del modal
        modalOverlay.style.display = "block";
        // Muestra el contenido del modal
        modalContent.style.display = "block";
    }

    // Función para ocultar el modal y el overlay
    function closeModal() {
        modalContainer.style.display = "none";
        modalOverlay.style.display = "none";
        modalContent.style.display = "none";
    }

    // Asigna el evento click a cada botón "VER MÁS"
    seeMoreButtons.forEach(button => {
        button.addEventListener("click", function (e) {
            e.preventDefault();
            openModal();
        });
    });

    // Cierra el modal al hacer clic en el overlay exclusivo
    modalOverlay.addEventListener("click", closeModal);
});
