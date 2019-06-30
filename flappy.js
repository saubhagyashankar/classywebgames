
//Made by Saubhagya.

const cvs = document.getElementById("canvas");
cvs.width=Math.ceil(window.innerWidth)-5;
cvs.height=Math.ceil(window.innerHeight)-2;

const ctx = cvs.getContext("2d");
let time_pole=4500;
let score = 0;
var bx=window.innerWidth/16;
var by=window.innerHeight/16;
if(bx>by){
    by=bx;
}
else{
    bx=by;
}

let bird = {
    x : Math.floor(window.innerWidth/20),
    y : Math.floor(window.innerHeight/2)
};

function fall(){

bird.y  = bird.y+25;

}

const flappy = new Image;
flappy.src = "FlappyImg/Frame-1.png";

let pole = [];

pole[0] = {
    x : window.innerWidth+40,
    y : 150,
    width : 80,
    gap : 180
};

function polePos(i){

pole[i]  = {
    x :Math.floor(window.innerWidth+20),
    y : Math.floor(Math.random()*300+130),
    width : Math.floor((Math.random()*(window.innerWidth/16))+(window.innerWidth/12)),
    gap : Math.floor(Math.random()*40+(135))
}


}

const poleTop = new Image;
poleTop.src = "FlappyImg/topPipe.png";

const poleBottom = new Image;
poleBottom.src = "FlappyImg/bottomPipe.png";


function movement(e){
    e.preventDefault();
    let key = e.keyCode;


    if(key === 32 || key === 38){

        bird.y = bird.y-80;


    }

}

function poleMover(){

for(let i=0;i<pole.length;i++){

    pole[i].x = pole[i].x-10;

}

}
var c=0;
function touchStart(e){
    e.preventDefault();
    bird.y = bird.y-80;
}

document.addEventListener("keydown",movement);
cvs.addEventListener("touchstart",touchStart);

let game = setInterval(draw,110);
let play = setInterval(poleCreate,Math.floor(Math.random()*4000+time_pole));

function draw(){

    
    var first = document.getElementById("first").innerHTML;
    var second = document.getElementById("second").innerHTML;
    var third = document.getElementById("third").innerHTML;
    //Canvas background
    ctx.fillStyle="#000000";
    ctx.fillRect(0,0,window.innerWidth,window.innerHeight);

    //bird draw
    ctx.drawImage(flappy,bird.x,bird.y,bx,by);

    


    for(let i = 0;i < pole.length;i++){

        let y = (pole[i].y+pole[i].gap);

        ctx.drawImage(poleTop,pole[i].x,0,pole[i].width,pole[i].y);

        ctx.drawImage(poleBottom,pole[i].x,y,pole[i].width,window.innerHeight-y);

    }
    if(pole[0].x<-(pole[0].width)){
        pole.shift();
        c=0;
        time_pole--;
        // clearInterval(game);
     }

    poleMover();

    
    ctx.font = "15px Arial";
    ctx.fillStyle="#FF8C00";
    ctx.fillText(score,(window.innerWidth-105),40);
    
    ctx.font = "15px Arial";
    ctx.fillStyle="#FF8C00";
    ctx.fillText("Score :",(window.innerWidth-150),40);
    
    
    ctx.font = "15px Arial";
    ctx.fillStyle="#FF8C00";
    ctx.fillText("Top Scores - ",30,40);
    
    ctx.font = "15px Arial";
    ctx.fillStyle="#FF8C00";
    ctx.fillText(first,20,55);
    
    ctx.font = "15px Arial";
    ctx.fillStyle="#FF8C00";
    ctx.fillText(second,20,70);
    
    ctx.font = "15px Arial";
    ctx.fillStyle="#FF8C00";
    ctx.fillText(third,20,85);
    


    if(((bird.x+(bx-6)>=pole[0].x)&&(bird.x<=(pole[0].x+pole[0].width))) && ((bird.y+14)<=pole[0].y || (bird.y+by-14)>=(pole[0].y+pole[0].gap))){
        clearInterval(game);
        clearInterval(play);
        window.location.href = "flappySaver.php?score=" + score;
        //console.log(bird.x+84+"/"+pole[0].x+"/"+bird.x+"/"+(pole[0].x+pole[0].width)+"/"+(bird.y-14)+"/"+pole[0].y+"/"+(bird.y+80-14)+"/"+(pole[0].y+pole[0].gap));
    }
    
    if(c===0)
    if(bird.x+90>pole[0].x+pole[0].width){
        c++;
        score++;
    }
   

    if(bird.y <= 0 || bird.y > window.innerHeight-by)
    {
    clearInterval(game);
    clearInterval(play);
    window.location.href = "flappySaver.php?score=" + score;
    }
    
    fall();
}

function poleCreate(){
    let poleNew = {
         x : 900,
         y : 100,
         width : 80,
         gap : 130
     };
     pole.push(poleNew);
     polePos(pole.length-1);
   }