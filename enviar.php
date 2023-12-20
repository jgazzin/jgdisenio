<?php
// no funciona


$nombre = $_POST['nombre'];
$mail = $_POST['email'];
$asunto = $_POST['asunto'];
$msg = $_POST['mensaje'];


$header = "X-Mailer: PHP/" . phpversion() . " \r\n";
$header .= "Mime-Version: 1.0 \r\n";
$header .= "Content-type: text/html; charset=iso-8859-1" . "\r\n";

$mensaje = "Mensaje fue enviado por " . $nombre . ",\r\n";
$mensaje .= "email: " . $mail . " \r\n";
$mensaje .= "Asunto: " . $asunto . "\r\n";
$mensaje .= "Mensaje: " . $msg . " \r\n";
$mensaje .= "Enviado el " . date('d/m/Y', time()) . " \r\n";

$para = 'j.gazzin@gmail.com';
$asuntoGl = "sitio jgdisenio: $asunto";

mail($para, $asuntoGl, $mensaje , $header);

// header("Location:index.html");
?>