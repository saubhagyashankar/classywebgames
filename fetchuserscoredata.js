let name = document.getElementById("username").innerText;

const url = name+".json";

fetch(url)
.then(function
(res){
    return res.json();
})
.then(function(data){
    let myObj =data;

    document.getElementById("shard").innerText = "Snake Hard : "+myObj.topScores[0];
    document.getElementById("seasy").innerText ="Snake Easy : "+myObj.topScores[1];
    document.getElementById("fbird").innerText = "Flappy Bird : "+myObj.topScores[2];
    // document.getElementById("ball").innerText = myObj.topScores[2].score;
    
});