//main.js

document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger-menu');
    const navUL = document.querySelector('nav ul');

    // Toggle menu on hamburger click
    hamburger.addEventListener('click', function() {
        navUL.classList.toggle('active');
    });

    // Close the menu when a link is clicked
    navUL.addEventListener('click', function(e) {
        if (e.target.tagName === 'A') {
            navUL.classList.remove('active');
        }
    });

    // Close the menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!hamburger.contains(e.target) && !navUL.contains(e.target)) {
            navUL.classList.remove('active');
        }
    });
});
