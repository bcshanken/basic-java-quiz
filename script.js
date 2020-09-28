// Dom Variables
var quizStart = document.getElementById("start-quiz");
var timeEl = document.getElementById("timer");
var welcomeContainer = document.getElementById("welcome");
var answerOptions = document.getElementById("answers");
var questionText = document.getElementById("question");
var secondsLeft = 10;
var currentQuestion = 0;

var quizQuestions = [
  {
    question: "Commonly used data types DO NOT include:",
    answers: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
  },
  {
    question: "The condition in an if/else statement is enclosed within _____.",
    answers: [
      "1. quotes",
      "2. curly brackets",
      "3. parentheses",
      "4. square brackets",
    ],
  },
  {
    question: "Arrays in JavaScript can be used to store _____.",
    answers: [
      "1. numbers and strings",
      "2. other arrays",
      "3. booleans",
      "4. all of the above",
    ],
  },
  {
    question:
      "String values must be enclosed within _____ when being assigned to variables.",
    answers: ["1. commas", "2. curly brackets", "3. quotes", "4. parentheses"],
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
      alert("time up");
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
    questionText.textContent=quizQuestions[currentQuestion].question;


    //   for (var i = 0; i < array.length; i++) {
//     var quizQuestionText = document.createElement("h2");
//     // button.setAttribute("class", "btn-btn-info");
//     quizQuestionText.textContent = quizQuestions[i].question;
//     quizQuestionText.setAttribute("data-value", quizQuestions[i].question);
//     questionText.append(quizQuestionText);
    
//   }
}

// Doing it (I dont remember the name of this section)
quizStart.addEventListener("click", function () {
  welcomeContainer.style.display = "none";
  startTIme();
  console.log("started");
  console.log(quizQuestions.length);
  var answersToDisplay = quizQuestions[currentQuestion].answers;
  renderAnswers(answersToDisplay);
//   var questionToDisplay = quizQuestions[currentQuestion].question;
//   console.log(questionToDisplay);
//   renderQuestions(questionToDisplay);
renderQuestions()
});

answerOptions.addEventListener("click", function (event) {
  if (event.target.matches("button")) {
    console.log("You clicked a button");
  }
});
