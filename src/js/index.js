document.addEventListener("DOMContentLoaded", function () {
    const hamburgerIcon = document.querySelector('.hamburger-icon');
    const navbar = document.getElementById('navbarMobile');

    if (window.innerWidth > 1024) {
        navbar.classList.add('active');
    }

    hamburgerIcon.addEventListener('click', function () {
        navbar.classList.toggle('active');
    });

    window.addEventListener('resize', function () {
        if (window.innerWidth > 1024) {
            navbar.classList.add('active');
        } else {
            navbar.classList.remove('active');
        }
    });

});

document.addEventListener("DOMContentLoaded", function () {
    const dropdownButton = document.getElementById('dropdownButton');
    const dropdownContent = document.querySelector('.dropdown-content');

    let dropdownVisible = false;

    dropdownButton.addEventListener('click', function () {
        dropdownVisible = !dropdownVisible;

        if (dropdownVisible) {
            dropdownContent.style.display = 'block';
        } else {
            dropdownContent.style.display = 'none';
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    // Selecteer de knoppen
    var agendaButton = document.querySelector('.agendaButton');
    var onsGeriefButton = document.querySelector('.onsGeriefButton');
    var paloebiesButton = document.querySelector('.paloebiesButton');
    var wolvenButton = document.querySelector('.wolvenButton');
    var poemaButton = document.querySelector('.poemaButton');
    var jvpvButton = document.querySelector('.jvpvButton');
    var kevinButton = document.querySelector('.kevinButton');


    // Voeg een klikgebeurtenis toe aan de knoppen
    agendaButton.addEventListener('click', function () {
        // alert('agenda button is pressed');
        scrollToPage(3);
    });
    onsGeriefButton.addEventListener('click', function () {
        // alert('Ons Gerief button is pressed');
        scrollToPage(4);
    });
    paloebiesButton.addEventListener('click', function () {
        // alert('paloebie button is pressed');
        scrollToPage(9);
    });
    wolvenButton.addEventListener('click', function () {
        // alert('wolven button is pressed');
        scrollToPage(13);
    });
    poemaButton.addEventListener('click', function () {
        // alert('pema button is pressed');
        scrollToPage(15);
    });
    jvpvButton.addEventListener('click', function () {
        // alert('jvpv button is pressed');
        scrollToPage(20);
    });
    kevinButton.addEventListener('click', function () {
        //alert('kevins button is pressed');
        scrollToPage(24);
    });


    // Functie om naar een specifieke pagina te springen
    function scrollToPage(page) {
        document.querySelector('iframe').src = document.querySelector('iframe').src.replace(/page=.*&/, 'page=' + page + '&');
        console.log(document.querySelector('iframe').src);
    }

});
