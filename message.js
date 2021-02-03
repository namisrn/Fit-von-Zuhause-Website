const name_key = document.getElementById("name_key");
const mail_key = document.getElementById("mail_key");
const message_key = document.getElementById("message_key");
const button_key = document.getElementById("button_key");

button_key.onclick = function () {
    const name = name_key.value;
    const mail = mail_key.value;
    const message = message_key.value;

    console.log(name);
    console.log(mail);
    console.log(message);
};  