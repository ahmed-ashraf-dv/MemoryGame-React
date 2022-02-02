<?php 

// Get Connect
include "./connect.php";


// Check If Post Name And Number
if(isset($_POST['name']) && isset($_POST['flag']) && isset($_POST['point'])) {

    // INFO
    $name   = $_POST['name'];
    $point  = $_POST['point'];
    $flag   = $_POST['flag'];

    // Serch From Db
    $taple = "countrys";
    $sql = "SELECT `name` FROM `$taple`";
    $result = mysqli_query($conn, $sql);

    // For Check In DB
    $valid = false;
    
    while($row = mysqli_fetch_assoc($result)){ 
        if($row['name'] === $name) {
            $valid = true;
            break;
        }
    };

    if($valid) {
    
        // Get Number With Name
        $sqlPoint = "SELECT `points` FROM `$taple` WHERE `name` = '$name'";
        $Pointresult = mysqli_query($conn, $sqlPoint);
        $Pointrow = mysqli_fetch_assoc($Pointresult);
        $hisPoint = $Pointrow['points'];

        // New Value
        $newPoints = $hisPoint + $point;
    
       // Set New Points
       $updatePoint = "UPDATE `countrys` SET `points`='$newPoints' WHERE `name` = '$name'";
       mysqli_query($conn, $updatePoint);

    }else {

       // Set New Country
       $updatePoint = "INSERT INTO `countrys`(`id`, `name`, `flag`, `points`) VALUES (null, '$name', '$flag', '$point')";
       mysqli_query($conn, $updatePoint);

    }
}else {
    echo "
    <h1 style='margin: 33px auto; width: fit-content; color: red;'>
        Hello Hacker :)
    </h1>";
}