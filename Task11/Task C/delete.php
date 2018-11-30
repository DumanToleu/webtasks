<?php
$servername = "localhost";
$username = "root";
$password = "";
$db = "task11";
// Create connection
$conn = new mysqli($servername, $username, $password, $db);
if(isset($_GET['id'])){
    $id = $_GET['id'];
    $admin = $_COOKIE['admin'];
    if($admin == 1){
        $sql = "DELETE FROM `cars` WHERE id = ".$id."";
        mysqli_query($conn,$sql);
        echo 'deleted';
    }
    else{
        echo 'you cant' . '<br>';
        echo 'your admin index is ' . $admin;
    }
}
mysqli_close($con);
?>