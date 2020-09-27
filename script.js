
// Dom Variables
var quizStart = document.getElementById("start-quiz");
var timeEl = document.getElementById("timer");
var secondsLeft = 10;

// functions

function startTIme(){
    var timerInterval= setInterval(function(){
        secondsLeft--;
        timeEl.textContent = "Time Remaining: " + secondsLeft;

        if(secondsLeft === 0){
            clearInterval(timerInterval);
            alert("time up");
        }
    },1000)
}



// Doing it (I dont remember the name of this section)
quizStart.addEventListener("click", function(){
    startTIme();
    console.log("started");
})

