<?php

session_start();

if(isset($_SESSION['uid'])){
    header("Location: games.php");
    exit();
}

?>

<!DOCTYPE html>
<html>
<head>
    <title>Login</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" media="screen" href="style.css" />
  
</head>
<body>
<header>
        <nav>
            <div class="main-wrapper">
                <ul>
                    <li>
                        <a href="index.php">Home</a>
                    </li>
                </ul>
                <div class="nav-login">
                  
                        <form class="signin-form" action="includes/login.inc.php" method="POST">
                            <input type="text" name="uid" placeholder="Username">
                            <input type="password" name="pwd" placeholder="password">
                            <button type="submit" name="submit">Home</button>
                        </form>
                        <a href="signup.php">Sign-up</a>

                </div>
            </div>

        </nav>

</header>