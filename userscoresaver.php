<?php


include_once 'includes/dbh.inc.php';

$userN = $_SESSION['uid'];
// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
else{
    $response = array();
$topScores = array();
$i=0;
$j=0;
$sql = "SELECT score FROM `snakehardscoreList` where pname='$userN' ORDER BY score DESC LIMIT 1"; 


$result=$conn->query($sql);

while($row=mysqli_fetch_array($result)) { 
  $score=$row['score']; 
    $j=1;
  $topScores[$i++] = $score;
} 
if($j==0){
    $topScores[$i++] = 0;
}else{
    $j=0;
}
$sql = "SELECT score FROM `scoreList` where pname='$userN' ORDER BY score DESC LIMIT 1"; 


$result=$conn->query($sql);

while($row=mysqli_fetch_array($result)) { 
  $score=$row['score']; 
  $j=1;
  $topScores[$i++] = $score;
} 
if($j==0){
    $topScores[$i++] = 0;
}else{
    $j=0;
}
$sql = "SELECT score FROM `flappyScoreList` where pname='$userN' ORDER BY score DESC LIMIT 1"; 


$result=$conn->query($sql);

while($row=mysqli_fetch_array($result)) { 
  $score=$row['score']; 
    $j=1;
  $topScores[$i++] = $score;
} 
if($j==0){
    $topScores[$i++] = 0;
}else{
    $j=0;
}



$response['topScores'] = $topScores;

$fp = fopen($userN.'.json', 'w');
fwrite($fp, json_encode($response));
fclose($fp);

$conn->close();
}