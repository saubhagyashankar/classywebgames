<?php

session_start();


include_once 'includes/dbh.inc.php';

if(isset($_SESSION['uid'])){




// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
//echo "Connected successfully";

/*$sql = "CREATE TABLE scoreList (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY, 
    name VARCHAR(40) NOT NULL,
    score INT(8)
    )";
*/

//echo "<h1>Sending to server</h1>";


$playerName =mysqli_real_escape_string($conn, $_SESSION['uid']);
$score = $_GET['score'];


//$sql = "INSERT INTO scoreList(pName,score) VALUES ($playerName,$score)";
$sql = "INSERT INTO snakehardscoreList(pname,score) VALUES('$playerName',$score)";

if ($conn->query($sql) === TRUE) {
    //echo "inserted successfully";
} else {
    echo "Error not inserted " . $conn->error;
}




$conn->close();
//echo "Data Sent,Redirecting plz wait!";
header("Location: snakky.php");
exit();
 /* Redirect browser */
}else{
    header("Location: games.php");
}
?>