console.log("online!");

$(document).ready(function() {

    //MENÚ
function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}
    // COOKIES
    if (!localStorage.getItem('cookiesAccepted')) {
        var toastElement = document.getElementById('cookieToast');
        var toast = new bootstrap.Toast(toastElement);
        toast.show();
    }

    $('#acceptCookies').click(function() {
        $(this).removeClass('btn-primary').addClass('btn-red');
        localStorage.setItem('cookiesAccepted', 'true');
        var toastElement = document.getElementById('cookieToast');
        var toast = bootstrap.Toast.getInstance(toastElement);
        toast.hide();
    });

    //BUSCADOR
    document.getElementById("search-icon").addEventListener("click", function() {
        var searchBar = document.getElementById("search-bar");
        if (searchBar.style.display === "none" || searchBar.style.display === "") {
            searchBar.style.display = "block"; // Muestra la barra de búsqueda
            searchBar.focus(); // Opcional: enfocar la barra de búsqueda
        } else {
            searchBar.style.display = "none"; // Oculta la barra de búsqueda
        }
    });
    
    // CARRUSEL
    $('.main-carousel').flickity({
        cellAlign: 'left',
        contain: true,
        freeScroll: true,
        prevNextButtons: false,
    });

    // Trigger the select event on initialization to set the initial progress line width
    var initialIndex = $('.main-carousel').data('flickity').selectedIndex;
    var totalCells = $('.main-carousel .carousel-cell').length; // Asegúrate de definir totalCells aquí
    var initialProgressWidth = ((initialIndex + 1) / totalCells) * 100;
    $('.progress-fill').css('width', initialProgressWidth + '%');

    //INSCRIPCIÓN
    const formulario = document.getElementById('miFormulario');
    const mensajeExito = document.getElementById('mensajeExito');
    const botonEnviar = formulario.querySelector('button');

    formulario.addEventListener('submit', event => {
        if (!formulario.checkValidity()) {
            event.preventDefault(); // Evita el envío si no es válido
            event.stopPropagation(); // Detiene la propagación del evento
        } else {
            event.preventDefault(); // Previene el envío predeterminado del formulario
            botonEnviar.classList.remove('btn-primary');
            botonEnviar.classList.add('btn-success'); // Cambia el botón a verde
            mensajeExito.classList.remove('d-none'); // Muestra el mensaje de éxito
        }

        formulario.classList.add('was-validated'); // Aplica la clase de validación de Bootstrap
    }, false);

    // Código para el botón de continuar (si es necesario)
    const continueBtn = document.querySelector(".button");
    if (continueBtn) {
        continueBtn.addEventListener('click', function() {
            alert("click");
        });
    } else {
        console.error("El botón no se encontró en el DOM.");
    }
});