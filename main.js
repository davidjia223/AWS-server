//main.js
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger-menu');
    const navUL = document.querySelector('nav ul');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navUL.classList.toggle('active');
    });

    document.addEventListener('click', event => {
        if (event.target.tagName === 'A' || !hamburger.contains(event.target) && !navUL.contains(event.target)) {
            navUL.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });

    const modal = document.getElementById("thankYouModal");
    const span = document.getElementsByClassName("close")[0];
    const contactForm = document.getElementById('contactForm');

    span.onclick = () => {
        modal.style.display = "none";
    }

    window.onclick = event => {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        modal.style.display = "block";
    });
});
