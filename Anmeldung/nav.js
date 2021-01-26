const loginSlide = () => {
    const anmeldungsContainer = document.querySelector('.anmeldungsContainer');
    const nav = document.querySelector('.login-form');
    const navLinks = document.querySelectorAll('.login-form li');


    //Burger toggle aktivieren bei click
    anmeldungsContainer.addEventListener('click', () => {
        nav.classList.toggle('nav-active')
        



        //Burger animieren
        anmeldungsContainer.classList.toggle('toggle');

    });
}


loginSlide(); 
