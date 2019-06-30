//Made by Saubhagya


const cvs = document.getElementById("canvas");
cvs.width=Math.ceil(window.innerWidth)-5;
cvs.height=Math.ceil(window.innerHeight)-2;

const ctx = cvs.getContext("2d");

var astroid=[];
function createAst(){
 astroid[astroid.length] = {
    x:Math.random()*(window.innerWidth-20)+10,
    y:window.innerHeight+20
}
}


const astImg = new Image;
astImg.src = "astroid.png";

var game = setInterval(draw,110);
var obs= setInterval(createAst,500);

function fall(){
for(var i=0;i<astroid.length;i++){
    astroid[i].y+=30;
}

}


function draw(){

for(var i=0;i<astroid.length;i++){
ctx.drawImage(astImg,astroid[i].x,astroid[i].y,50,50);
}
fall();






}