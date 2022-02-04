<?php

 // Access Cross
 $referer = parse_url($_SERVER['HTTP_REFERER']);
 $allowedDomain = 'memorygame-iota.vercel.app';

// Access My Domin
 header("Access-Control-Allow-Origin: https://$allowedDomain");

// Prodected My Server
if ($referer['host'] !== $allowedDomain) return false;
 
 $dbname = "id18175421_countrys";
 $dbhost = "localhost";
 $dbuser = "id18175421_countrys_12";
 $dbpass = "WZ{{@t}\Cr1N5VgF";

 //Connect
 $conn = new mysqli($dbhost, $dbuser, $dbpass,$dbname) or die("Connect failed: %s\n". $conn -> error);