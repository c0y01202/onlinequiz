var containerQuestionEl = document.getElementById("question-container");
var containerStartEl = document.getElementById("starter-container");
var containerEndEl = document.getElementById("end-container");
var containerScoreEl = document.getElementById("score-banner");
var formInitials = document.getElementById("initials-form");
var containerHighScoresEl = document.getElementById("high-score-container");
var ViewHighScoreEl = document.getElementById("view-high-scores");
var listHighScoreEl = document.getElementById("high-score-list");
var correctEl = document.getElementById("correct");
var wrongEl = document.getElementById("wrong");
//variables for buttons
var btnStartEl = document.querySelector("#start-game");
var btnGoBackEl = document.querySelector("#go-back");
var btnClearScoresEl = document.querySelector("#clear-high-scores");
//questions and answers elements
var questionEl = document.getElementById("question");
var answerbuttonsEl = document.getElementById("answer-buttons");
var timerEl = document.querySelector("#timer");
var score = 0;
var timeleft;
var gameover;
timerEl.innerText = 0;

//high score array
var HighScores = [];

//assign array details for questions
var arrayShuffledQuestions;
var QuestionIndex = 0;

// Questions on the quiz with multiple choice
var questions = [
  {
    q: "The append.child element is an example of: __________.",
    a: "b. Dynamic Programming Language ",
    choices: [
      { choice: "a. A CSS condition" },
      { choice: "b. Dynamic Programming Language" },
      { choice: "c. Artificial Intelligence" },
      { choice: "d. Git Bash Code" },
    ],
  },
  {
    q: "Else and If functions are commonly seen in:",
    a: "a. CSS conditions",
    choices: [
      { choice: "a. CSS conditions" },
      { choice: "b. HTML Language" },
      { choice: "c. Javascript elements" },
      { choice: "d. APIs" },
    ],
  },
  {
    q: "What is the function called when you pass a function into another function?",
    a: "c. a callback function",
    choices: [
      { choice: "a. adEvent Listener" },
      { choice: "b. a skip function" },
      { choice: "c. a call back function" },
      { choice: "d. a var function" },
    ],
  },
  {
    q: "What does CSS stand for?",
    a: "b. Cascading Style Sheet",
    choices: [
      { choice: "a. Computer Standard Style" },
      { choice: "b. Cascading Style Sheet" },
      { choice: "c. Computational Style Sheet" },
      { choice: "d. Cascading Standard Sheet" },
    ],
  },
  {
    q: "What lamguage can manipulate code for a DOM?",
    a: "c. Javascript",
    choices: [
      { choice: "a. CSS" },
      { choice: "b. HTML" },
      { choice: "c. Javascript" },
      { choice: "d. JSON" },
    ],
  },
];

//condition for starting quiz over
function renderStartPage() {
  containerHighScoresEl.classList.add("hide");
  containerHighScoresEl.classList.remove("show");
  containerStartEl.classList.remove("hide");
  containerStartEl.classList.add("show");
  containerScoreEl.removeChild(containerScoreEl.lastChild);
  QuestionIndex = 0;
  gameover = "";
  timerEl.textContent = 0;
  score = 0;

  if ((correctEl.className = "show")) {
    correctEl.classList.remove("show");
    correctEl.classList.add("hide");
  }
  if ((wrongEl.className = "show")) {
    wrongEl.classList.remove("show");
    wrongEl.classList.add("hide");
  }
}

//start time at 30 and chec if true after every click on answer
var setTime = function () {
  timeleft = 30;

  var timercheck = setInterval(function () {
    timerEl.innerText = timeleft;
    timeleft--;

    if (gameover) {
      clearInterval(timercheck);
    }

    if (timeleft < 0) {
      showScore();
      timerEl.innerText = 0;
      clearInterval(timercheck);
    }
  }, 1000);
};

var startGame = function () {
  //function to generate questions on page
  containerStartEl.classList.add("hide");
  containerStartEl.classList.remove("show");
  containerQuestionEl.classList.remove("hide");
  containerQuestionEl.classList.add("show");
  //array to randomize questions
  arrayShuffledQuestions = questions.sort(() => Math.random() - 0.5);
  setTime();
  setQuestion();
};

//display next question after one is answered
var setQuestion = function () {
  resetAnswers();
  displayQuestion(arrayShuffledQuestions[QuestionIndex]);
};

//reset answers
var resetAnswers = function () {
  while (answerbuttonsEl.firstChild) {
    answerbuttonsEl.removeChild(answerbuttonsEl.firstChild);
  }
};

//function to show questions and buttons
var displayQuestion = function (index) {
  questionEl.innerText = index.q;
  for (var i = 0; i < index.choices.length; i++) {
    var answerbutton = document.createElement("button");
    answerbutton.innerText = index.choices[i].choice;
    answerbutton.classList.add("btn");
    answerbutton.classList.add("answerbtn");
    answerbutton.addEventListener("click", answerCheck);
    answerbuttonsEl.appendChild(answerbutton);
  }
};
//show correct!
var answerCorrect = function () {
  if ((correctEl.className = "hide")) {
    correctEl.classList.remove("hide");
    correctEl.classList.add("banner");
    wrongEl.classList.remove("banner");
    wrongEl.classList.add("hide");
  }
};
//show wrong!
var answerWrong = function () {
  if ((wrongEl.className = "hide")) {
    wrongEl.classList.remove("hide");
    wrongEl.classList.add("banner");
    correctEl.classList.remove("banner");
    correctEl.classList.add("hide");
  }
};

//display answer if correct
var answerCheck = function (event) {
  var selectedanswer = event.target;
  if (arrayShuffledQuestions[QuestionIndex].a === selectedanswer.innerText) {
    answerCorrect();
    score = score + 7;
  } else {
    answerWrong();
    score = score - 1;
    timeleft = timeleft - 3;
  }

  //generates the next question
  QuestionIndex++;
  if (arrayShuffledQuestions.length > QuestionIndex + 1) {
    setQuestion();
  } else {
    gameover = "true";
    showScore();
  }
};

//render complete score at end of online quiz
var showScore = function () {
  containerQuestionEl.classList.add("hide");
  containerEndEl.classList.remove("hide");
  containerEndEl.classList.add("show");

  var scoreDisplay = document.createElement("p");
  scoreDisplay.innerText = "Your final score is " + score + "!";
  containerScoreEl.appendChild(scoreDisplay);
};

//generate value for high score
var createHighScore = function (event) {
  event.preventDefault();
  var initials = document.querySelector("#initials").value;
  if (!initials) {
    alert("Enter your intials!");
    return;
  }

  formInitials.reset();

  var HighScore = {
    initials: initials,
    score: score,
  };

  //pushes high scores to storage
  HighScores.push(HighScore);
  HighScores.sort((a, b) => {
    return b.score - a.score;
  });

  //lists high score
  while (listHighScoreEl.firstChild) {
    listHighScoreEl.removeChild(listHighScoreEl.firstChild);
  }
  //sorts scores by value and initial
  for (var i = 0; i < HighScores.length; i++) {
    var highscoreEl = document.createElement("li");
    highscoreEl.ClassName = "high-score";
    highscoreEl.innerHTML =
      HighScores[i].initials + " - " + HighScores[i].score;
    listHighScoreEl.appendChild(highscoreEl);
  }

  saveHighScore();
  displayHighScores();
};
//event to store high score on DOM
var saveHighScore = function () {
  localStorage.setItem("HighScores", JSON.stringify(HighScores));
};

//pushes value of high score to the DOM
var loadHighScore = function () {
  var LoadedHighScores = localStorage.getItem("HighScores");
  if (!LoadedHighScores) {
    return false;
  }

  LoadedHighScores = JSON.parse(LoadedHighScores);
  LoadedHighScores.sort((a, b) => {
    return b.score - a.score;
  });

  for (var i = 0; i < LoadedHighScores.length; i++) {
    var highscoreEl = document.createElement("li");
    highscoreEl.ClassName = "high-score";
    highscoreEl.innerText =
      LoadedHighScores[i].initials + " - " + LoadedHighScores[i].score;
    listHighScoreEl.appendChild(highscoreEl);

    HighScores.push(LoadedHighScores[i]);
  }
};

//renders high scores on page in order
var displayHighScores = function () {
  containerHighScoresEl.classList.remove("hide");
  containerHighScoresEl.classList.add("show");
  gameover = "true";

  if ((containerEndEl.className = "show")) {
    containerEndEl.classList.remove("show");
    containerEndEl.classList.add("hide");
  }
  if ((containerStartEl.className = "show")) {
    containerStartEl.classList.remove("show");
    containerStartEl.classList.add("hide");
  }

  if ((containerQuestionEl.className = "show")) {
    containerQuestionEl.classList.remove("show");
    containerQuestionEl.classList.add("hide");
  }

  if ((correctEl.className = "show")) {
    correctEl.classList.remove("show");
    correctEl.classList.add("hide");
  }

  if ((wrongEl.className = "show")) {
    wrongEl.classList.remove("show");
    wrongEl.classList.add("hide");
  }
};
//removes the list of scores from the page
var clearScores = function () {
  HighScores = [];

  while (listHighScoreEl.firstChild) {
    listHighScoreEl.removeChild(listHighScoreEl.firstChild);
  }

  localStorage.clear(HighScores);
};

loadHighScore();

//click start to start game
btnStartEl.addEventListener("click", startGame);
//click submit to get highs score
formInitials.addEventListener("submit", createHighScore);
//to view high scores
ViewHighScoreEl.addEventListener("click", displayHighScores);
//go back to start page
btnGoBackEl.addEventListener("click", renderStartPage);
//clear scores button
btnClearScoresEl.addEventListener("click", clearScores);
