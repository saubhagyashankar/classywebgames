<?php
include_once('games.php');
?>

<link rel="stylesheet" type="text/css" media="screen" href="gamesstyle.css" />
<p class="uppertxt">Choose a game:</p>
    <a href="snakky.php" class="snakehard">Snake Game!(Hard)</a>
    <br>
    <a href="old/snakky.php" class="snakeeasy">Snake Game!(Easy)</a>
    <br>
    <a href="flappy.php" class="flappy">Flappy Bird!</a>
    <br>
    <a href="ball.html" class="ball">Jumping Ball!</a>
    <br>
    
    

    <p class="scores">Your top scores are: </p>
    <p class="shard" id="shard"></p>
    <p class="seasy" id="seasy"></p>
    <p class="fbird" id="fbird"></p>
    <p class="jball" id="jball"></p>
    <script type="text/javascript" src="fetchuserscoredata.js"></script>

    <?php
    include_once 'footer.php';
    ?>