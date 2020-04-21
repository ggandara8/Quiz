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
var scorePageEl = document.querySelector(".scorePage");

var questions = [
    {
        q: "Inside which element do we put the Javascript?",
        options: ["<script>", "<js>", "<scripting>", "<javascripting>" ],
        answer: 0
    },
    {
        q: "How do you create a Javascript variable?",
        options: ["var name", "v name", "variable name", "vr name" ],
        answer: 0
    },
    {
        q: "Which operator is used to assign a value to a variable?",
        options: ["x", "*", "=", "-" ],
        answer: 2 
    },
    {
        q:  "Choose the correct HTML element for the largest heading:",
        options: ["<h6>", "<head>","<h1>", "<heading>"],
        answer: 2 
    },
    {
        q:  "What is the correct HTML element for inserting a line break?",
        options: ["<brk>", "<br>","<lb>", "<break>"],
        answer: 1 
    }

];

var questionNumber = 0;
var time = 45;
var score = 0;
var correctMsg = "Correct";
var wrongMsg = "Wrong";
// ----------------------------------------------------------------------//

// event for each button in every situation
startEl.addEventListener("click", function(){
    startQuiz();
    Countdown();
});

option1El.addEventListener("click", function(){
    if (questionNumber === 0 || questionNumber === 1){ 
       correctAnswer();
    } else {
       wrongAnswer();
    }
});


option3El.addEventListener("click", function(){
    if (questionNumber === 2 || questionNumber === 3){ 
       correctAnswer();
    } else {
       wrongAnswer();
    }
});
     
option2El.addEventListener("click", function(){
    if (questionNumber === 4){  
      correctAnswer();

    } else {
      wrongAnswer();
    }
});

option4El.addEventListener("click", function(){
      wrongAnswer();
        
}); 
// ----------------------------------------------------------------------//
// functions
function startQuiz() {

    contentEl.classList.add("hide");
    continueEl.classList.remove("hide"); 

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
}

// stop timer at 0
function stopTimer() {
   if (time < 1){ 
    time = 0;
   }
}

// keep score, increase timer and show correct answer
function correctAnswer(){
    questionNumber++;
    
    score +=5;

    correctOrNotEl.innerHTML = correctMsg;
        
    setTimeout(function(){
        correctOrNotEl.innerHTML = '';
    }, 500);

    startQuiz();

    time+=5;
}

// show wrong answer and decrease timer 
function wrongAnswer(){
    questionNumber++;
    
    correctOrNotEl.textContent = wrongMsg;
    
    setTimeout(function(){
        correctOrNotEl.innerHTML = '';
    }, 400);
    
    startQuiz();

    time-=5;
}