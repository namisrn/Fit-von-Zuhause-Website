const auswahl = () => {
    const standard_abo = document.querySelector('.standard_abo');
    const prof_abo = document.querySelector('.prof_abo');
    const ult_abo = document.querySelector('.ult_abo');
    const standard = document.querySelector('.standard_abo');
    const prof = document.querySelector('.prof_abo');
    const ult = document.querySelector('.ult_abo');
    localStorage.setItem("Abo","0");


    //Abomodell Standard auswählen und ggf. anderes deaktivieren
    standard_abo.addEventListener('click', () => {

        if (localStorage.getItem('Abo')!="0")
        {
            if (localStorage.getItem('Abo')=="2")
            {
                prof.classList.toggle('prof_abo_active');
                localStorage.setItem("Abo","0");
            }

            if (localStorage.getItem('Abo')=="3")
            {
                ult.classList.toggle('ult_abo_active');
                localStorage.setItem("Abo","0");
            }
        }

        if(localStorage.getItem('Abo')=="0")
        {
            standard.classList.toggle('standard_abo_active');
            localStorage.setItem("Abo","1");
        }
        else 
        {
            standard.classList.toggle('standard_abo_active');
            localStorage.setItem("Abo","0");
        }
    });

 //Abomodell Professionell auswählen und ggf. anderes deaktivieren
    prof_abo.addEventListener('click', () => {
        
        if (localStorage.getItem('Abo')!="0")
        {
            if (localStorage.getItem('Abo')=="1")
            {
                standard.classList.toggle('standard_abo_active');
                localStorage.setItem("Abo","0");
            }

            if (localStorage.getItem('Abo')=="3")
            {
                ult.classList.toggle('ult_abo_active');
                localStorage.setItem("Abo","0");
            }
        }

        if(localStorage.getItem('Abo')=="0")
        {
            prof.classList.toggle('prof_abo_active');
            localStorage.setItem("Abo","2");
        }
        else 
        {
            prof.classList.toggle('prof_abo_active');
            localStorage.setItem("Abo","0");
        }
        
    });


  //Abomodell Ultimate auswählen und ggf. anderes deaktivieren  
    ult_abo.addEventListener('click', () => {
        
        if (localStorage.getItem('Abo')!="0")
        {
            if (localStorage.getItem('Abo')=="1")
            {
                standard.classList.toggle('standard_abo_active');
                localStorage.setItem("Abo","0");
            }

            if (localStorage.getItem('Abo')=="2")
            {
                prof.classList.toggle('prof_abo_active');
                localStorage.setItem("Abo","0");
            }
        }
        if(localStorage.getItem('Abo')=="0")
        {
            ult.classList.toggle('ult_abo_active');
            localStorage.setItem("Abo","3");
        }
        else 
        {
            ult.classList.toggle('ult_abo_active');
            localStorage.setItem("Abo","0");
        }
        
    });
}


auswahl(); 