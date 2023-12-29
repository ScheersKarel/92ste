document.addEventListener("DOMContentLoaded", function () {
    const hamburgerIcon = document.querySelector('.hamburger-icon');
    const navbar = document.getElementById('navbar');

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
