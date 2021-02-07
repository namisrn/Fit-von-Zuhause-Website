// Author: Dennis Liebelt //


// alle nötigen Variablen werden gesetzt und mit den Elementen der Nachricht gefüllt //
const name_key = document.getElementById("name_key");
const mail_key = document.getElementById("mail_key");
const message_key = document.getElementById("message_key");
const button_key = document.getElementById("button_key");

// Wenn der Senden Button auf Startseite gedrückt wird, wird diese Funktion gestartet 
button_key.onclick = function () {
    const name = name_key.value;
    const mail = mail_key.value;
    const message = message_key.value;

    
        if (name && mail && message) //wenn alle Eingaben gesetzt sind werden diese zur Zeit erstmal im Localstorage hinterlegt
        {
            localStorage.setItem("name_key", name);
            localStorage.setItem("mail_key", mail);
            localStorage.setItem("message_key", message);
            localStorage.setItem("kontaktaufnahme", name + " ;" + mail  + " ;" + message);
            window.confirm("Wir melden uns!");
        }    
        else{ //falls unvollständig Rückmeldung an Nutzer
            window.confirm("Leider fehlen Angaben!");
        }

};  