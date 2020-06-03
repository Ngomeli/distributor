const hamburger = document.querySelector(".hamburger");
const navlinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links");

hamburger.addEventListener('click', () => {
    navlinks.classList.toggle("open");
});