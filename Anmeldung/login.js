// Author: Dennis Liebelt //
// Pseudo Anmeldung 
const log_mail_id = document.getElementById("log_mail_id"); //Mailadresse
const log_pass_id = document.getElementById("log_pass_id"); // Passwort
const log_send_id = document.getElementById("log_send_id"); // zu überwachender Button

log_send_id.onclick = function () {
    var localstorage_mail = localStorage.getItem('RegisterMail'); //Mail aus dem localstorage
    var localstorage_pw = localStorage.getItem('Passwort'); //Passwort aus dem localstorage

    if( log_mail_id.value == localstorage_mail && log_pass_id.value == localstorage_pw) {
        alert('Wilkommen'); //Rückgabe korrekt => Willkommen
    }else {
        alert('Falsche oder unvollständige Eingabe'); // Eingabe falsch => Rückmeldung Nutzer
    }
    
}