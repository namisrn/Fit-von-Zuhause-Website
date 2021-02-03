<?php
    if (isset($_POST['email'])) {
        $email = $_POST['email'];
        $password = $_POST['password'];

        if ($password=="1234"){
            header('Location: /index.html');
        } else {
                echo "Wrong Password!";
            }

        
    }
