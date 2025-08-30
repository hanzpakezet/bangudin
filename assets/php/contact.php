<?php
// Simple contact form handler — requires PHP mail() enabled on server.
header('Content-Type: application/json');

function clean($v){ return trim(strip_tags($v ?? '')); }

$name = clean($_POST['name'] ?? '');
$email = clean($_POST['email'] ?? '');
$message = clean($_POST['message'] ?? '');

if(!$name || !$email || !$message){
  echo json_encode(['ok'=>false,'message'=>'Please fill all fields.']);
  exit;
}

$to = 'you@example.com'; // TODO: change to your email
$subject = "New message from $name";
$body = "Name: $name\nEmail: $email\n\nMessage:\n$message\n";
$headers = "From: $name <$email>\r\nReply-To: $email\r\n";

$sent = @mail($to, $subject, $body, $headers);

echo json_encode([
  'ok' => $sent ? true : false,
  'message' => $sent ? 'Thanks! Your message was sent.' : 'Sorry, could not send email on this server.'
]);
