
// COOKIES
$(document).ready(function() {
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
});

//INSCRIPCIÓN
document.addEventListener('DOMContentLoaded', function() {
    'use strict';

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



// CARRUSEL SECCION 1
$(document).ready(function() {
    $('.main-carousel').flickity({
        cellAlign: 'left',
        contain: true,
        freeScroll: true,
        prevNextButtons: false,
    });

    // BARRA DE PROGRESO DEL CARRUSEL

    // Update progress line on select event
    $('.main-carousel').on('select.flickity', function(event, index) {
        var totalCells = $('.main-carousel .carousel-cell').length; // Total number of cells
        var progressWidth = ((index + 1) / totalCells) * 100; // Calculate progress width as a percentage
        $('.progress-fill').css('width', progressWidth + '%'); // Update the width of the progress fill
    });

    // Trigger the select event on initialization to set the initial progress line width
    var initialIndex = $('.main-carousel').data('flickity').selectedIndex;
    var initialProgressWidth = ((initialIndex + 1) / totalCells) * 100;
    $('.progress-fill').css('width', initialProgressWidth + '%');
});