// Dom Variables
var quizStart = document.getElementById("start-quiz");
var timeEl = document.getElementById("timer");
var welcomeContainer = document.getElementById("welcome");
var quizContainer=document.getElementById("quiz");
var answerOptions = document.getElementById("answers");
var questionText = document.getElementById("question");
var scoreBoardMessage = document.getElementById("scoresMessage");
var scoreForm = document.getElementById("score-form");
var secondsLeft = 80;
var currentQuestion = 0;
var score = 20;
var historicalScores= ["bs - 15", "bf - 16"]
var userInitialsInput = document.getElementById("score-initials")




var quizQuestions = [
  {
    question: "Commonly used data types DO NOT include:",
    answers: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
    solution: "3. alerts",
  },
  {
    question: "The condition in an if/else statement is enclosed within _____.",
    answers: [
      "1. quotes",
      "2. curly brackets",
      "3. parentheses",
      "4. square brackets",
    ],
    solution: "3. parentheses",
  },
  {
    question: "Arrays in JavaScript can be used to store _____.",
    answers: [
      "1. numbers and strings",
      "2. other arrays",
      "3. booleans",
      "4. all of the above",
    ],
    solution: "4. all of the above",
  },
  {
    question:
      "String values must be enclosed within _____ when being assigned to variables.",
    answers: ["1. commas", "2. curly brackets", "3. quotes", "4. parentheses"],

    solution: "4. parentheses",
  },
  {
    question:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    answers: [
      "1. JavaScript",
      "2. terminal/bash",
      "3. for loops",
      "4. consol.log",
    ],
    solution: "4. consol.log",
  },
];

// functions

function startTIme() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = "Time Remaining: " + secondsLeft;

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      // insert high score function here
      // renderHighScore();
    }
  }, 1000);
}

function renderAnswers(array) {
  for (var i = 0; i < array.length; i++) {
    var button = document.createElement("button");
    button.setAttribute("class", "btn-btn-info");
    button.textContent = array[i];
    button.setAttribute("data-value", array[i]);
    answerOptions.append(button);
  }
}

function renderQuestions() {
  questionText.textContent = quizQuestions[currentQuestion].question;
}
function renderHighScore(){
  quizContainer.style.display="none";
  timeEl.style.display="none";
  var highScoreMessage = document.createElement("h2");
  var score = secondsLeft;
  if(score<0){
    score=0;
  }
  highScoreMessage.textContent = "All Done ";
  scoreBoardMessage.append(highScoreMessage); 
  var yourScoreMessage = document.createElement("p");
  yourScoreMessage.textContent= "Your score is " + score;
  scoreBoardMessage.append(yourScoreMessage);
  var formLabel =document.createElement("label");
  formLabel.textContent="Enter your initials: ";
  formLabel.setAttribute("id","score-form-label");
  scoreForm.append(formLabel);
  var initialInput = document.createElement("input");
  initialInput.setAttribute("type","text");
  initialInput.setAttribute("id","score-initials");
  scoreForm.append(initialInput);
  var button =document.createElement("button");
  button.setAttribute("class", "btn btn-danger");
  button.setAttribute("id", "submit")
  button.textContent="Submit";
  scoreForm.append(button);
  button.addEventListener("click",function(event){
    event.preventDefault();
  var scoreToAddInitials = document.getElementById("score-initials");
  var scoreToAdd = scoreToAddInitials.value.trim() + "- " + score;
  console.log(scoreToAdd);
  })

  

}

// Doing it (I dont remember the name of this section)
quizStart.addEventListener("click", function () {
  welcomeContainer.style.display = "none";
  startTIme();
  console.log("started");
  console.log(quizQuestions.length);
  var answersToDisplay = quizQuestions[currentQuestion].answers;
  renderAnswers(answersToDisplay);
  renderQuestions();
});

answers.addEventListener("click", function (event) {
  if(secondsLeft<0){
    console.log("negative score")
    renderHighScore;
  }else{
  if (event.target.matches("button")) {
    var selectedanswer = event.target.getAttribute("data-value");
    console.log(selectedanswer);
    // selects correct answer CondA
    if (selectedanswer === quizQuestions[currentQuestion].solution) {
      currentQuestion++;
      console.log("stuck in right answer loop");
      // if on the last question CondA1
      if (currentQuestion === quizQuestions.length) {
        var score = secondsLeft;
        renderHighScore();
      } else {
        // pulls next question CondA2
        var answersToDisplay = quizQuestions[currentQuestion].answers;
        answers.textContent = "";
        renderAnswers(answersToDisplay);
        renderQuestions();
      }
    } else {
      // selects wrong answer CondB
    console.log("wrong answer submitted.");
    currentQuestion++;
    // is on the last question ConB1
    if (currentQuestion === quizQuestions.length) {
      console.log("game over" + secondsLeft);
      var score = secondsLeft - 18;
      console.log("score" + score);
      renderHighScore();
    } else {
      // pulls next question ConB2
      var answersToDisplay = quizQuestions[currentQuestion].answers;
      secondsLeft = secondsLeft - 18;
      answers.textContent = "";
      renderAnswers(answersToDisplay);
      renderQuestions();
    }
  }
}}
});



answerOptions.addEventListener("click", function (event) {
  if (event.target.matches("button")) {
    // console.log("You clicked a button");
  }
});
