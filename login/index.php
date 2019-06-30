<?php
include_once 'header.php';
if(isset($_GET['login'])){
    if($_GET['login']=="error"){
        echo "Login Failed!, invalid username or password.";
    } 
    }
?>
<section class="main-container">
    <div class="main-wrapper">
        <h2>Classy web Games</h2>
        <img src="pics/s2.png" alt="Snakky" width="50%" height="50%">
        <img src="pics/f1.png" alt="Flappy" width="30%" height="30%">

    </div>
</section>
    
<?php
include_once 'footer.php';
?>
