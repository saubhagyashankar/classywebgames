<?php
session_start();

if(!isset($_SESSION['uid'])){
    header("Location: index.php");
    exit();
}

include 'userscoresaver.php';
?>

<html>
<head>
    <title>
      Snake Game!
    </title>

    
    <link rel="stylesheet" type="text/css" media="screen" href="home.css" />

</head>
<body>
    <p id="username" hidden><?php $name = $_SESSION['uid'];
        echo "$name"; ?></p>

    <h1 class="welcome">Classy Web Games</h1>
    <p class="uservalue">Welcome 
        <?php
        $name = $_SESSION['uid'];
        echo "$name"; ?>
        </p>

    <a href="logout.php" class="logout">
        Logout</a>
    
        
    <div class="tab">
  <button class="tablinks" id="home">Home</button>
  <button class="tablinks" id="contact">Contact</button>
  <button class="tablinks" id="chat">Chat</button>
</div>

    <script type="text/javascript" src="changetogame1.js"></script>

    
<?php
include_once 'footer.php';
?>