document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger-menu');
    const navUL = document.querySelector('nav ul');

    function toggleMenu() {
        navUL.classList.toggle('active');
    }

    function closeMenu(event) {
        if (event.target.tagName === 'A' || !hamburger.contains(event.target) && !navUL.contains(event.target)) {
            navUL.classList.remove('active');
        }
    }

    hamburger.addEventListener('click', toggleMenu);
    document.addEventListener('click', closeMenu);
});

document.addEventListener('DOMContentLoaded', (event) => {
    const modal = document.getElementById("thankYouModal");
    const span = document.getElementsByClassName("close")[0];

    

    document.getElementById('contactForm').addEventListener('submit', function(e){
        e.preventDefault();
        modal.style.display = "block";
    });
});
