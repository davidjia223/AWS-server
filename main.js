document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger-menu');
    const navUL = document.querySelector('nav ul');
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    document.body.appendChild(overlay);

    hamburger.addEventListener('click', () => {
        navUL.style.animation = 'none'; // Reset animation
        setTimeout(() => { navUL.style.animation = ''; }, 10); // Restart animation
        hamburger.classList.toggle('active');
        navUL.classList.toggle('active');
        overlay.classList.toggle('active');
    });

    overlay.addEventListener('click', closeMenu);

    function closeMenu() {
        hamburger.classList.remove('active');
        navUL.classList.remove('active');
        overlay.classList.remove('active');
    }

    // Close menu when a link is clicked
    navUL.querySelectorAll('li a').forEach(link => {
        link.addEventListener('click', closeMenu);
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
