<?php 

// Get Connect
include "./connect.php";

$taple = "countrys";
$sql = "SELECT * FROM `$taple`";
$result = mysqli_query($conn, $sql);

while($row = mysqli_fetch_assoc($result)){ $API[] = $row; };

echo json_encode($API);

?>