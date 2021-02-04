//Registrierung

const reg_mail_id = document.getElementById("reg_mail_id"); //Mailadresse
const reg_pass_id = document.getElementById("reg_pass_id"); // Passwort
const reg_send_id = document.getElementById("reg_send_id"); // zu überwachender Button

var user = [];

//Mail und Passwort gegebenenfalls in LocalStorage schreiben
reg_send_id.onclick = function () {
    const mail_id = reg_mail_id.value;
    const pass_id = reg_pass_id.value;
    

    
        if (reg_mail_id && reg_pass_id ) // überprüfen ob Mail und Passwort angegeben wurden
        {
            localStorage.setItem("RegisterMail",mail_id);
            localStorage.setItem("Passwort",pass_id);
            user.push(mail_id,pass_id);
            alert("User in localstorage gespeichert");
            console.log(console.table(user));
           //alert(user[0,0]); 
           //location.reload();
        }    

};  

// Login
const log_mail_id = document.getElementById("log_mail_id"); //Mailadresse
const log_pass_id = document.getElementById("log_pass_id"); // Passwort
const log_send_id = document.getElementById("log_send_id"); // zu überwachender Button

log_send_id.onclick = function () {

    var localstorage_mail = localStorage.getItem('RegisterMail');
    var localstorage_pw = localStorage.getItem('Passwort');

    if( log_mail_id.value == localstorage_mail && log_pass_id.value == localstorage_pw) {
        alert('Wilkommen');
    }else {
        alert('Falsche Eingabe');
    }
    
}

