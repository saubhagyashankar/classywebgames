//Made by Saubhagya


//var myObj = JSON.parse(topScores);


var playerN = prompt("Please enter your name", "<name goes here>");

if (playerN != null) {

document.getElementById("playerName").innerHTML = playerN ;

}
else{
//alert("not working");
playerN = "temp";
}

//smallest box
let box=20;
//var startSound =new sound("sound.mp3");

//startSound.play();
let ran_12 = 0;

//Creating Canvas
const cvs = document.getElementById("canvas");
var w=cvs.width=Math.floor((document.body.clientWidth-2)/box)*box;
var h=cvs.height=Math.floor((document.body.clientHeight-2)/box)*box;


const ctx = cvs.getContext("2d");

//initializing Score
let score = document.getElementById("score");


let dead=0,undead=100;

//Score counter
let count=0;

//<script type="text/javascript" src="http://yourjavascript.com/47012842131/game.js"></script>
//Creating snake
let snake=[];
for(let i=0;i<1;i++)
snake[i]={
    x:15*box,
    y:15*box
};


//let w = (600-20)/box;
//let h = (600-20)/box;
let food = []
 food[0] ={x:2*box,y:2*box};


let t=1;


//const foodObj = new Image;
//foodObj.src="pizza3.png";



function foodpos(){



 food[food.length]={

 x:(Math.floor(Math.random()*(w-20)/box)*box),
 y: (Math.floor(Math.random()*(h-20)/box)*box),

};

} 

let d = "left";



function direction(e){
    e.preventDefault();
    let key = e.keyCode;

    if(d === "up" || d === "down"){
    if(key === 37 && d !== "right"){
        d="left";
    }
    
    else if(key === 39&& d !== "left"){
        d="right";
    }
}
    else if(d === "right" || d === "left"){
     if(key === 38 && d !== "down"){
    d="up";
    }
    
    else if(key === 40 && d !== "up"){
        d="down";
    }
}   
};


var touches = [];

function touchStart(e)
{
  e.preventDefault();
  var touchList = e.changedTouches;
  var touch;
  for(var i = 0; i < touchList.length; i++)
  {
    //cons.html(cons.html() + "startX: " + touchList[i].screenX + ", id: " + touchList[i].identifier + "<br/>");
    touch = {x: touchList[i].pageX, y: touchList[i].pageY, id: touchList[i].identifier};
    touches.push(touch);
  }
}

function touchEnd(e)
{
  //cons.html(cons.html() + "<strong>TouchEnd:</strong><br/>");
  var touchList = e.changedTouches;
  var touch;
  for(var i = 0; i < touchList.length; i++)
  {
    touch = {x: touchList[i].pageX, y: touchList[i].pageY, id: touchList[i].identifier};
    for (var j = touches.length - 1; j >= 0 ; j--)
    {
      if (touches[j].id == touch.id)
      {
      //  cons.html(cons.html() + "<strong>startX: "+ touches[j].x+ ", id: " + touchList[i].identifier + "</strong><br/>");
     
     if(d === "up" || d === "down"){

      if(touch.x<touches[j].x && d !== "right"){
        d = "left";
    }

    else if(touch.x>touches[j].x && d !== "left" ){
        d = "right";
    }
}
    else if(d === "left" || d === "right"){
      if(touch.y<touches[j].y  && d !== "down"){
        d = "up";
    }
     
     else if(touch.y>touches[j].y && d !== "up" ){
        d = "down";
    }
}

        touches.splice(j,1);
      }
    }
  }
}





let prvX,prcY;
function movement(){

    prvX=snake[0].x;
    prvY=snake[0].y;
    

    if(d==="right"){
        if(snake[0].x >= w-box){
            
            snake[0].x=0;
        }
        else
        snake[0].x+=box;

    }
   else if(d==="left"){
    if(snake[0].x < box){
        snake[0].x=w-box;
    }
    else
        snake[0].x-=box;
    }
    else if(d==="up"){
        if(snake[0].y < box){
            snake[0].y=h-20;
        }
        else
        snake[0].y-=box;
    }
    else if(d==="down"){
        if(snake[0].y >= h-box){
            snake[0].y=0;
        }
        else
        snake[0].y+=box;
    }
    
    
    

};

document.addEventListener("keydown",direction);
cvs.addEventListener("touchstart",touchStart);
cvs.addEventListener("touchend",touchEnd);
//document.getElementById("canvas").ontouchstart=function(event){
  //  e.preventDefault();
//}
//document.getElementById("canvas").ontouchend=function(event){
   // e.preventDefault();
//}
//document.getElementById("canvas").ontouchmove=function(event){
  //  e.preventDefault();
//}
let time =110;
let game = setInterval(draw,time);
let stopGame = setInterval(stop,1000);

function stop(){
    undead--;
}

  
//myTrack.applyConstraints(constraints);
var playerName = document.getElementById("playerName").innerText;






function draw(){

    var first = document.getElementById("first").innerHTML;
var second = document.getElementById("second").innerHTML;
var third = document.getElementById("third").innerHTML;
   
    //Canvas background
ctx.fillStyle="#0066cc";
ctx.fillRect(0,0,window.innerWidth,window.innerHeight);


    

    //direction(event);
    movement();
   // ctx.fillStyle="#ffffff";

   for(let i=snake.length-1;i>0;i--){
    
   if(i===1){
        snake[i].x=prvX;
        snake[i].y=prvY;
    }
    else{
        snake[i].x=snake[i-1].x;
        snake[i].y=snake[i-1].y;
        //console.log(snake[2].x);
    }
    
}
//snake dies :(
for(let i=1;i<snake.length;i++){
    if((snake[0].x===snake[i].x && snake[0].y===snake[i].y)||(undead <= 0)){
        clearInterval(game);
        dead = 1;

    }
    if(dead === 1){

        if(count/1000 === snake.length-1){

        //document.getElementById("playerScore").value = score;
        window.location.href = "Snake.php?playerName=" + playerName + "&score=" + count;
      //  location.reload(true);
        //alert("Game Over,Better luck next time,its reloading");
        break;
        }
        else{
            ctx.font = "15px Arial";
            ctx.fillStyle="#ffccff";
            ctx.fillText("Dont cheat buddy!!",w/2-50,150);
            window.location.href = "snakky.php";
            break;
        }
    }
}


   for(let i=0 ; i<snake.length; i++){

    i===0?ctx.fillStyle="#ff5c33":ctx.fillStyle="#ff704d";
    ctx.fillRect(snake[i].x,snake[i].y,box,box);
   // console.log(snake[1].x);

}

   

    
    
    //food image
    for(let mm=0;mm<food.length;mm++){
    ctx.fillStyle="#32CD32";
    ctx.fillRect(food[mm].x,food[mm].y,box,box);
    //ctx.drawImage(foodObj,food.x,food.y,2*box,box);
    }
    ctx.font = "15px Arial";
ctx.fillStyle="#ffccff";
ctx.fillText(count,(w-100),40);

ctx.font = "15px Arial";
ctx.fillStyle="#ffccff";
ctx.fillText("Score :",(w-150),40);


ctx.font = "15px Arial";
ctx.fillStyle="#ffccff";
ctx.fillText("Top Scores - ",30,40);

ctx.font = "15px Arial";
ctx.fillStyle="#ffccff";
ctx.fillText(first,20,55);

ctx.font = "15px Arial";
ctx.fillStyle="#ffccff";
ctx.fillText(second,20,70);

ctx.font = "15px Arial";
ctx.fillStyle="#ffccff";
ctx.fillText(third,20,85);

ctx.font = "30px Arial";
ctx.fillStyle="#ff0000";
ctx.fillText(undead,w-75,85);

ctx.font = "25px Arial";
ctx.fillStyle="#ff0000";
ctx.fillText("Hurry!!",w-150,85);



    for(let mm=0;mm<food.length;mm++){
    if(Math.abs(snake[0].x-food[mm].x) < 1.0 && Math.abs((snake[0].y-food[mm].y)) < 1.0){
        count+=1000;
        food.splice(mm,1);
        foodpos();
        foodpos();
        
        let snakeNew={
            x:0,
            y:0
        };
        snake.push(snakeNew);
        time--;
        clearInterval(game);
        game=setInterval(draw,time);
       // t+=0.000001;
       // game = setInterval(draw,120-t);


    }
}
    //score.innerHTML=count;
    //console.log(w);

};


//location.href ="Snake.php?playerName=" + playerName + "&score=" + count;
//ctx.frameRate(40);
