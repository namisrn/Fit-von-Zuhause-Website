// Author: Dennis Liebelt //
//Registrierung

const reg_mail_id = document.getElementById("reg_mail_id"); //Mailadresse
const reg_pass_id = document.getElementById("reg_pass_id"); // Passwort
const reg_send_id = document.getElementById("reg_send_id"); // zu überwachender Button



//Mail und Passwort gegebenenfalls in LocalStorage schreiben
reg_send_id.onclick = function () {
    const mail_id = reg_mail_id.value;
    const pass_id = reg_pass_id.value;
    

    
        if (reg_mail_id && reg_pass_id ) // überprüfen ob Mail und Passwort angegeben wurden
        {
            localStorage.setItem("RegisterMail",mail_id); //Mail in den loal storage
            localStorage.setItem("Passwort",pass_id);  //Passwort in den loal storage
        }   
        else{
            alert("Falsche Eingabe"); //Meldung das die Eingabe nicht komplett war
        } 

};  


