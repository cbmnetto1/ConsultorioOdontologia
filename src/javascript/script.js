$(document).ready(function() {
    $('#mobile-btn').on('click', function() {
        $('#mobile-menu').toggleClass('active');
        $('#mobile-btn').find('i').toggleClass('fa-x');
    });
});

document.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    if (window.scrollY > 50) { // Adiciona classe se rolar mais de 50px
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});