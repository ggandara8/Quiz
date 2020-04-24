var startEl = document.getElementById("start-btn");
var contentEl = document.querySelector(".container");
var continueEl = document.querySelector(".container2");
var option1El = document.getElementById("option1");
var option2El = document.getElementById("option2");
var option3El = document.getElementById("option3");
var option4El = document.getElementById("option4");
var presentationTextEl = document.getElementById("presentationText");
var timerEl = document.getElementById("timer");
var correctOrNotEl = document.getElementById("correctOrNot");
var scorePageEl = document.querySelector(".container3");
var showFinalScoreEl = document.getElementById("ShowfinalScore");
var scoreEl = document.getElementById("score");
var resultsBtnEl = document.getElementById("results");
var restartEl = document.getElementById("restart");
var viewHSEl = document.getElementById("ViewHS");
var HSinputEl = document.getElementById("HSinput");
var backBtnEl = document.getElementById("backBtn");
var addBtnEl = document.getElementById("addBtn");
var HsListEl = document.getElementById("HS-list");
var nameEl = document.getElementById("name");

var questions = [
    {
        q: "Inside which element do we put the Javascript?",
        options: ["<script>", "<js>", "<scripting>", "<javascripting>" ],
    },
    {
        q: "How do you create a Javascript variable?",
        options: ["var name", "v name", "variable name", "vr name" ],
    },
    {
        q: "Which operator is used to assign a value to a variable?",
        options: ["x", "*", "=", "-" ], 
    },
    {
        q:  "Choose the correct HTML element for the largest heading:",
        options: ["<h6>", "<head>","<h1>", "<heading>"], 
    },
    {
        q:  "What is the correct HTML element for inserting a line break?",
        options: ["<brk>", "<br>","<lb>", "<break>"],
    }
];

var questionNumber = 0;
var time = 30;
var score = 0;
var correctMsg = "Correct";
var wrongMsg = "Wrong";
var highScoreUser = [
    {
        name: "Gerardo",
        score: score
    }];

init();
// ----------------------------------------------------------------------//

// event for each button in every situation
startEl.addEventListener("click", function(event){
    event.preventDefault();
    startQuiz();
    Countdown();
});

option1El.addEventListener("click", function(){
    if (questionNumber === 0 || questionNumber === 1){ 
       correctAnswer();
    } else {
       wrongAnswer();
    }
    SubmitQuiz();
});


option3El.addEventListener("click", function(){
    if (questionNumber === 2 || questionNumber === 3){ 
       correctAnswer();
    } else {
       wrongAnswer();
    }
    SubmitQuiz();
});
     
option2El.addEventListener("click", function(){
    if (questionNumber === 4){  
      correctAnswer();

    } else {
      wrongAnswer();
    }
    SubmitQuiz();
});

option4El.addEventListener("click", function(){
      wrongAnswer();
      SubmitQuiz();
});

resultsBtnEl.addEventListener("click", function(){
    ScorePage();
    time = 0;
});

restartEl.addEventListener("click", RestartQuiz);

viewHSEl.addEventListener("click", function(){
    time = 0;
    contentEl.classList.add("hide");
    ScorePage();
    HSinputEl.classList.add("hide");
    backBtnEl.classList.remove("hide");
});

backBtnEl.addEventListener("click", function(){
    time = 30;
    contentEl.classList.remove("hide");
    scorePageEl.classList.add("hide");
    HSinputEl.classList.remove("hide");
    backBtnEl.classList.add("hide");
});

addBtnEl.addEventListener("click", function(){
    event.preventDefault();
    var UserNameText = nameEl.value.trim();

    if (UserNameText === "") {
        return;
    }

    highScoreUser.push(UserNameText);
    nameEl.value = "";

    // Store updated todos in localStorage, re-render the list
    storeUsers();
    renderUsers();
});

// ----------------------------------------------------------------------//
// functions

function startQuiz() {

    contentEl.classList.add("hide");
    continueEl.classList.remove("hide"); 
    resultsBtnEl.classList.add("hide");
    backBtnEl.classList.add("hide");

    //the question
    presentationTextEl.textContent = questions[questionNumber].q;
    
    //options
    option1El.textContent = questions[questionNumber].options[0];
    option2El.textContent = questions[questionNumber].options[1];
    option3El.textContent = questions[questionNumber].options[2];
    option4El.textContent = questions[questionNumber].options[3];
}

// timer count
function Countdown() {
    timerEl.textContent = time;
    time--;

    setTimeout(function() {
    Countdown();}, 1000);
    
    stopTimer();
    if (time === 0){
        ScorePage();
    }
}

// stop timer at 0
function stopTimer() {
   if (time < 1){ 
    time = 0;
   }
}

// keep score, increase timer and show correct answer
function correctAnswer(){
    if (questionNumber < 4){
    questionNumber++;
    }
    score +=5;

    correctOrNotEl.innerHTML = correctMsg;
        
    setTimeout(function(){
        correctOrNotEl.innerHTML = '';
    }, 300);

    startQuiz();

    time+=5;    
}

// show wrong answer and decrease timer 
function wrongAnswer(){
    if (questionNumber < 4){
    questionNumber++;
    }
    correctOrNotEl.textContent = wrongMsg;
    
    setTimeout(function(){
        correctOrNotEl.innerHTML = '';
    }, 300);
    
    startQuiz();

    time-=5;
}

function SubmitQuiz() {

    if(questionNumber === 4){
        resultsBtnEl.classList.remove("hide");
    }
}

function ScorePage() {
    scorePageEl.classList.remove("hide");
    continueEl.classList.add("hide");
    
    if(score >= 15){
    scoreEl.textContent = "Great Job: " + score + "pts"; 
    } else {
    scoreEl.textContent = "You have to study: " + score + "pts";   
    }
}

function RestartQuiz() {
    scorePageEl.classList.add("hide");
    time = 30;
    questionNumber = 0;
    score = 0;
    startQuiz();
}

function storeUsers() {
    localStorage.setItem("Users", JSON.stringify(highScoreUser));
}

function renderUsers() {
    HsListEl.innerHTML = "";

    for (var i = 0; i < highScoreUser.length; i++){
        var userN = highScoreUser[i];
        var li = document.createElement("li");

        li.textContent = userN;
        
        HsListEl.appendChild(li);
    }
}

function init() {
    var storedUsers = JSON.parse(localStorage.getItem("Users"));
    
    if (storedUsers !== null) {
        highScoreUser = storedUsers;
    }

    renderUsers();
}