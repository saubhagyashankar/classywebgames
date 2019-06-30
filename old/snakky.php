<?php
session_start();
?>


<html>
<head>
    <title>
      Snake Game!
    </title>

    


</head>
<body bgcolor = "#003366">

    <meta name="viewport" content="width=device-width; 
    initial-scale=0.5; maximum-scale=1; user-scalable=0;"/>

<canvas id="canvas" ></canvas>
<p hidden id="playerName"></p>
<p hidden id="playerScore"></p>
<ol hidden id="topScores">
    <li hidden id="first">loading</li>
    <li hidden id="second">loading</li>
    <li hidden id="third">loading</li>
</ol>
<p id="demo">
</p>

<?php 


include_once '../includes/dbh.inc.php';

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
else{
$sql = "SELECT pName,score FROM `scoreList` ORDER BY score DESC LIMIT 3"; 

$response = array();
$topScores = array();
$result=$conn->query($sql);

while($row=mysqli_fetch_array($result)) { 
  $playerName=$row['pName']; 
  $score=$row['score']; 

  $topScores[] = array('pName'=> $playerName, 'score'=> $score);
} 

$response['topScores'] = $topScores;

$fp = fopen('snakeScore.json', 'w');
fwrite($fp, json_encode($response));
fclose($fp);

$conn->close();
}
?> 

<script type="text/javascript" src="loadScore.js"></script>
<script type="text/javascript" src="loadJson.js"></script>
<script type="text/javascript" src="game.js"></script>




</body>

</html>