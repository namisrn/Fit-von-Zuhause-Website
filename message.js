// Author: Dennis Liebelt //


// alle nötigen Variablen werden gesetzt und mit den Elementen der Nachricht gefüllt //
const name_key = document.getElementById("name_key");
const mail_key = document.getElementById("mail_key");
const message_key = document.getElementById("message_key");
const button_key = document.getElementById("button_key");


/*******************************************************************/
/************* Author: Sasan Rafat Nami (Validierung) **************/
/*******************************************************************/

// hier wir eingabee des Email Felds nach gegebenen Pattern überprüfen
function validMail (email) {
    const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return pattern.test(email);
}

function validateName(name) {
    if (name == "") {
      error.innerHTML = 'Name kann nicht leer sein';
      return false;
    } else if (name.length < 3) {
      error.innerHTML = 'Name muss mehr als 3 karakter sein';
      return false;
    }
        return true;
    }

  
// Hier wird überprüft,dass Email-Feld nicht leer oder weniger als 4 karakter sein
// sowie wird die Rückgabe von validMail überprüft, wenn alles true ist, dann return true
// wenn nicht dann bekommt man entsprechende Nachticht.
function validateEmail(email) {
    if (email == "") {
        error.innerHTML = 'Email kann nicht leer sein';
        return false;
    } else if (email.length < 4) {
        error.innerHTML = 'Email muss mehr als 4 karakter sein';
        return false;
    }else if (!validMail(email)){
        error.innerHTML = 'Bitte nutzen Sie richtige Email-Format';
        return false;
    }
        return true;
    }

// Nachricht wird hier auch überprüft. Es muss nur nicht leer sein.
function validateMsg(message) {
    if (message == "") {
        error.innerHTML = 'Bitte schreiben Sie Ihren Nachricht.';
        return false;
    }
        return true;
    }
    
  /************************* Ende Validierung **************************/


// Wenn der Senden Button auf Startseite gedrückt wird, wird diese Funktion gestartet
button_key.onclick = function () {
    const name = name_key.value;
    const email = mail_key.value;
    const message = message_key.value;

  //wenn alle Eingaben gesetzt sind werden diese zur Zeit erstmal im Localstorage hinterlegt
            if ( validateName(name) && validateEmail(email) && validateMsg(message) ){
                localStorage.setItem("name_key", name);
                localStorage.setItem("mail_key", email);
                localStorage.setItem("message_key", message);
                localStorage.setItem("kontaktaufnahme", name + " ;" + email  + " ;" + message);
                window.confirm("Wir melden uns!");
            }
        
        
        };


