
function loadJSON(){
var xmlhttp = new XMLHttpRequest();

xmlhttp.onload = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
     myObj = JSON.parse(xmlhttp.response);
        document.getElementById("first").innerText = "1st "+myObj.topScores[0].pname+"- "+myObj.topScores[0].score;
        document.getElementById("second").innerText = "1st "+myObj.topScores[1].pname+"- "+myObj.topScores[1].score;
        document.getElementById("third").innerText = "1st "+myObj.topScores[2].pname+"- "+myObj.topScores[2].score;

    }
    else{
        alert("data not received");
    }
};

xmlhttp.open("POST", "snakeScore.json", true);
xmlhttp.responseType='json';
xmlhttp.send();
}