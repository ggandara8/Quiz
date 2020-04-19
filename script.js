var continueBtnEl = document.querySelector(".continue-btn");
var startEl = document.querySelector(".start-btn");
var contentEl = document.querySelector(".container");
var continueEl = document.querySelector(".container2");
var option1El = document.getElementById("option1");
var option2El = document.getElementById("option2");
var option3El = document.getElementById("option3");
var option4El = document.getElementById("option4");
var presentationTextEl = document.getElementById("presentationText");
var timerEl = document.getElementById("timer");

startEl.addEventListener("click", function(){
    startQuiz();
    Countdown();
});
continueBtnEl.addEventListener("click", nextQuestion);

var questionNumber = 0;
var time = 60;

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

function nextQuestion() {
    questionNumber++;
    startQuiz();
}

function Countdown() {
    timerEl.textContent = time;
    time--;

    setTimeout(function() {Countdown();}, 1000);

}




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

]

console.log(questions[0].options[0]);
// function QuestionRender (questions) {
   
//     var Q = questions[arr];
//     instructionsEl.textContent = Q.question;
//     answerBtnAEl.textContent = Q.a;
//     answerBtnBEl.textContent = Q.b;
//     answerBtnCEl.textContent = Q.c;
//     answerBtnDEl.textContent = Q.d;
//  console.log(Q);
//  console.log(correct);
//  }