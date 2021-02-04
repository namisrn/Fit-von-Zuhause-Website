const name_key = document.getElementById("name_key");
const mail_key = document.getElementById("mail_key");
const message_key = document.getElementById("message_key");
const button_key = document.getElementById("button_key");

button_key.onclick = function () {
    const name = name_key.value;
    const mail = mail_key.value;
    const message = message_key.value;

    
        if (name && mail && message)
        {
            localStorage.setItem("name_key", name);
            localStorage.setItem("mail_key", mail);
            localStorage.setItem("message_key", message);
            localStorage.setItem("kontaktaufnahme", name + " ;" + mail  + " ;" + message);
            //location.reload();
            window.confirm("Wir melden uns!");
        }    

};  