<?php
 $dbhost = "localhost";
 $dbname = "topcountrys";
 $dbuser = "root";
 $dbpass = "";

 //Connect
 $conn = new mysqli($dbhost, $dbuser, $dbpass,$dbname) or die("Connect failed: %s\n". $conn -> error);
