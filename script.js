document.getElementById('menu-toggle').addEventListener('click', function() {
    var navMenu = document.getElementById('nav-menu');
    var menuToggle = document.getElementById('menu-toggle');
    navMenu.classList.toggle('show');
    menuToggle.classList.toggle('show');
});

var swiper = new Swiper('.swiper-container', {
    spaceBetween: 30,
    effect: 'fade',
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});