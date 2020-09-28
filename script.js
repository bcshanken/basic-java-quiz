// Dom Variables
var quizStart = document.getElementById("start-quiz");
var timeEl = document.getElementById("timer");
var welcomeContainer = document.getElementById("welcome");
var answerOptions = document.getElementById("answers");
var questionText = document.getElementById("question");
var secondsLeft = 80;
var currentQuestion = 0;

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
  questionText.textContent = quizQuestions[currentQuestion].question;
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
  if (event.target.matches("button")) {
    var selectedanswer = event.target.getAttribute("data-value");
    console.log(selectedanswer);
    if (selectedanswer === quizQuestions[currentQuestion].solution) {
      currentQuestion++;
      console.log("stuck in right answer loop");
      if (currentQuestion === quizQuestions.length) {
        var score = secondsLeft;
        alert("quiz over");
      } else {
        var answersToDisplay = quizQuestions[currentQuestion].answers;
        answers.textContent = "";
        renderAnswers(answersToDisplay);
        renderQuestions();
      }
    } else {
    console.log("wrong answer submitted.");
    currentQuestion++;
    if (currentQuestion === quizQuestions.length) {
      console.log("game over" + secondsLeft);
      var score = secondsLeft - 18;
      console.log("score" + score);
      alert("quiz over");
    } else {
      var answersToDisplay = quizQuestions[currentQuestion].answers;
      secondsLeft = secondsLeft - 18;
      answers.textContent = "";
      renderAnswers(answersToDisplay);
      renderQuestions();
    }
  }
}
});

answerOptions.addEventListener("click", function (event) {
  if (event.target.matches("button")) {
    // console.log("You clicked a button");
  }
});
