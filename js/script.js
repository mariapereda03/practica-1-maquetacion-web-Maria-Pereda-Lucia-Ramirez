// COOKIES
$(document).ready(function() {
    console.log("Document is ready"); // Agrega esta línea
    if (!localStorage.getItem('cookiesAccepted')) {
        var toastElement = document.getElementById('cookieToast');
        var toast = new bootstrap.Toast(toastElement);
        toast.show();
    }
    $('#acceptCookies').click(function() {
        localStorage.setItem('cookiesAccepted', 'true');
        var toastElement = document.getElementById('cookieToast');
        var toast = bootstrap.Toast.getInstance(toastElement);
        toast.hide();
    });
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