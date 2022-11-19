<?php

// multi smtp
$smtp[] = array( "host" => "smtp.office365.com", "port" => "587", "security" => "tls", "username" => "", "password" => "");


// message 
$messages[] = array("subject" => "", "email" => "", "name" => "",);


// config 
$config = array(
    "delay_after" => "1", // emails
    "delay" => "1", // detik
    "message_html" => "letter.html",
    "message_attach" => "test.pdf", // file asli
    "message_attach_rename" => "", // rename file
);

// random links
$links = array(
    "http://google.com",
    "http://yahoo.com",
    "http://youtube.com",
);

// custom header
$headers = array(
    'X-Originating-IP' => 'xx',
    'Authentication-Results' => 'xx',
    'Received' => 'xxx',
);
