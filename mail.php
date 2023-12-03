<?php

$name = $_POST["name"];
$from = $_POST["userEmail"];
$subject = "Wiadomość z fromularza Portfolio";
$to = "kami3x3s@gmail.com";
$message = $_POST["message"];

$txt = "Imię: " . $name . "\r\n" . "Email: " . $from . "\r\n" . "\r\n" . "Treść: " . $message;

$headers = "From: " . $from . "\r\n";
$headers = "Reply-to: " . $from . "\r\n";

$mail_status = mail($to, $subject, $txt, $headers);

if($mail_status){
    header("Location: /Portfolio/Kontakt.html?mail_status=sent");
}else {
    header("Location: /Portfolio/Kontakt.html?mail_status=error");
}
?>