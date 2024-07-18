document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuIcon = document.getElementById('mobile-menu-icon');
    const menu = document.getElementById('menu');

    mobileMenuIcon.addEventListener('click', function() {
        menu.classList.toggle('active');
    });
});
