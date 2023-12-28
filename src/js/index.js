document.addEventListener("DOMContentLoaded", function () {
    const hamburgerIcon = document.querySelector('.hamburger-icon');
    const navbar = document.getElementById('navbar');

    hamburgerIcon.addEventListener('click', function () {
        navbar.classList.toggle('active');
    });
});