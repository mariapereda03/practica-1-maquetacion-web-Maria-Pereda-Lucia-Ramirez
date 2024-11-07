$(document).ready(function() {
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

    // BUSCADOR
    $('#search').on('keyup', function() {
        var value = $(this).val().toLowerCase();
        $('.carousel-cell').filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
        });
    });

    // FLICKITY
    var jq = jQuery.noConflict();
    jq(document).ready(function() {
        // Inicializar Flickity
        var $mainCarousel = jq('.carousel').flickity({
            cellAlign: 'left',
            contain: true,
            freeScroll: true,
            prevNextButtons: false,
        });

        var totalCells = $mainCarousel.find('.carousel-cell').length;

        // BARRA DE PROGRESO DEL CARRUSEL
        $mainCarousel.on('select.flickity', function(event, index) {
            var progressWidth = ((index + 1) / totalCells) * 100; // Calcular el ancho del progreso como un porcentaje
            jq('.progress-fill').css('width', progressWidth + '%'); // Actualizar el ancho del progreso
        });

        // Trigger the select event on initialization to set the initial progress line width
        var initialIndex = $mainCarousel.data('flickity').selectedIndex;
        var initialProgressWidth = ((initialIndex + 1) / totalCells) * 100;
        jq('.progress-fill').css('width', initialProgressWidth + '%');
    });

    // INSCRIPCIÓN
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