const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".hamburgerMenu");
const links = document.querySelectorAll(".hamburgerMenu li");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  links.forEach(link => {
    link.classList.toggle("fade");
  });
});