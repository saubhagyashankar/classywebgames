
const url = "snakeScore.json";

fetch(url)
.then(function
(res){
    return res.json();
})
.then(function(data){

    let myObj =data;
    document.getElementById("first").innerText = "1st "+myObj.topScores[0].pName+"- "+myObj.topScores[0].score;
    document.getElementById("second").innerText = "2nd "+myObj.topScores[1].pName+"- "+myObj.topScores[1].score;
    document.getElementById("third").innerText = "3rd "+myObj.topScores[2].pName+"- "+myObj.topScores[2].score;


});