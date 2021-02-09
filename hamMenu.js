/*****************************************************/
/************* Author: Sasan Rafat Nami **************/
/*****************************************************/


/* sucht nach hamburger und hamburgerMenu klass sowie die listen (li) 
    in HamburgerMenu und verweisen die an entsprechende konstanten */

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".hamburgerMenu");
const links = document.querySelectorAll(".hamburgerMenu li");

  /* wenn man auf HamburgerMenu klickt, wird hier durch die funktion und toggle-Class zwischen in 
    CSS geschriebene code und Klasse ( .hamburgerMenu und .hamburgerMenu.open ) umgeschaltet und deswegen wird das Menugeöffnet*/
hamburger.addEventListener("click", function() {
  navLinks.classList.toggle("open");

  /* hier werden link durch die toggle-Class umgeschaltet*/
  links.forEach(link => {
    link.classList.toggle("fade");
  });
});



