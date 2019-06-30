<?php
session_start();

if(!isset($_GET['login'])){
}else{
    if($_GET['login']=="error"){
        echo "Login Failed!, invalid username or password.";
    } 
    }
    if(!isset($_GET['signup'])){
    }else{
        if($_GET['signup']=="success"){
            echo "SignUp Success!, Login Now.";
        } else if($_GET['signup']=="invalid"){
            echo "invalid inputs";
        } else if($_GET['signup']=="empty"){
            echo "Empty inputs";
        } else if($_GET['signup']=="email"){
            echo "invalid email";
        }
        }
?>
<!DOCTYPE html>
<html lang="en">
   <head>
      <title>Games</title>
      <!-- Meta tags -->
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="keywords" content="login & Sign up Form "/>
      <script>
         addEventListener("load", function() { setTimeout(hideURLbar, 0); }, false); function hideURLbar(){ window.scrollTo(0,1); }
      </script>
      <!-- Meta tags -->
      <!-- font-awesome icons -->
      <link href="css/fontawesome-all.min.css" rel="stylesheet" type="text/css" media="all">
      <!-- //font-awesome icons -->
      <!--stylesheets-->
      <link href="css/style.css" rel='stylesheet' type='text/css' media="all">
      <!--//style sheet end here-->
      <link href="//fonts.googleapis.com/css?family=Barlow:300,400,500" rel="stylesheet">
   </head>
   <body>
      <h1 class="header-w3ls">
         CLASSY WEB GAMES
      </h1>
      <div class="art-bothside">
         <div class="sap_tabs">
            <div id="horizontalTab">
               <ul class="resp-tabs-list">
                  <li class="resp-tab-item"><span>Login</span></li>
                  <li class="resp-tab-item"><span>Sign Up</span></li>
               </ul>
               <div class="clearfix"> </div>
               <div class="resp-tabs-container">
                  <div class="tab-1 resp-tab-content">
                     <div class="swm-right-w3ls">
                        <form action="includes/login.inc.php" method="POST">
                           <div class="main">
                              <div class="icon-head-wthree">
                                 <h2>Login Here</h2>
                              </div>
                              <div class="form-left-to-w3l">
                                 <input type="text" name="uid" placeholder="UserName" required="">
                              </div>
                              <div class="form-right-w3ls ">
                                 <input type="password" name="pwd" placeholder="Password" required="">
                              </div>
                              <div class="btnn">
                                 <button type="submit" name="submit">LogIn</button><br>
                                 <a href="#" class="for">Forgot password...?</a>  
                              </div>
                           </div>
                        </form>
                     </div>
                  </div>
                  <div class="tab-1 resp-tab-content">
                     <div class="swm-left-w3ls">
                        <form action="includes/signup.inc.php" method="post">
                           <div class="main">
                              <div class="icon-head-wthree">
                                 <h2>Sign Up Here</h2>
                              </div>
                              <div class="form-left-to-w3l">
                                 <input type="text" name="first" placeholder="FirstName" required="">
                              </div>
                              <div class="form-left-to-w3l">
                                <input type="text" name="last" placeholder="LastName" required="">
                             </div>
                              <div class="form-left-w3l">
                                 <input type="email" name="email" placeholder="Email" required="">
                              </div>
                              <div class="form-left-to-w3l">
                                <input type="text" name="uid" placeholder="UserName" required="">
                             </div>
                              <div class="form-right-w3ls ">
                                 <input type="password" name="pwd" placeholder="Password" required="">
                              </div>
                              <div class="btnn">
                                 <button type="submit" name="submit">Sign Up</button><br>
                              </div>
                           </div>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div class="social-icons">
         <ul>
            <li>
               <a href="#">
               <span class="fab fa-facebook-f"></span>
               </a>
            </li>
            <li>
               <a href="#">
               <span class="fab fa-google-plus-g"></span>
               </a>
            </li>
            <li>
               <a href="#">
               <span class="fab fa-twitter"></span>
               </a>
            </li>
         </ul>
      </div>
      
      <!--js working-->
      <script src='js/jquery-2.2.3.min.js'></script>
      <!--//js working-->
      <script src="js/easyResponsiveTabs.js"></script>
      <script>
         $(document).ready(function () {
         	$('#horizontalTab').easyResponsiveTabs({
         		type: 'default', //Types: default, vertical, accordion           
         		width: 'auto', //auto or any width like 600px
         		fit: true // 100% fit in a container
         	});
         });
      </script>
   </body>
</html>