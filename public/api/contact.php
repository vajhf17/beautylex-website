<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

$data = json_decode(file_get_contents("php://input"), true);

$nombre = $data["nombre"];
$email = $data["email"];
$mensaje = $data["mensaje"];

$to = "info@beautylex.es";

$subject = "Nuevo mensaje de contacto";

$message = "
Nombre: $nombre

Email: $email

Mensaje:
$mensaje
";

$headers = "From: info@beautylex.es";

if(mail($to, $subject, $message, $headers)) {

    echo json_encode([
        "success" => true
    ]);

} else {

    echo json_encode([
        "success" => false
    ]);
}
?>