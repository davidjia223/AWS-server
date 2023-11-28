document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger-menu');
    const navUL = document.querySelector('nav ul');

    function toggleMenu() {
        navUL.classList.toggle('active');
    }

    

    hamburger.addEventListener('click', toggleMenu);
    document.addEventListener('click', closeMenu);
});
