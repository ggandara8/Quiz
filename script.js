var startEl = document.querySelector(".start-btn");
var continueEl = document.querySelector(".container2");
var contentEl = document.querySelector(".container");
var instructionsEl = document.querySelector(".instructions");
var answerBtnAEl = document.querySelector(".answer-button");
var continueBtnEl = document.querySelector(".continue-btn");
var posEl = document.querySelector(".pos");



startEl.addEventListener("click", startQuiz);
continueBtnEl.addEventListener("click", nextQuestion);

var count = 0;

function startQuiz() {

    contentEl.classList.add("hide");
    continueEl.classList.remove("hide"); 
        
        //the question
        var ques = document.createElement("h3");
        var q = document.createTextNode(questions[count]["q"]);
        ques.appendChild(q);
        posEl.appendChild(ques);
        console.log(q);

        //the list and buttons
        var qlist = document.createElement("li");
        var btn = document.createElement("button");
        btn.classList.add("answer-button");
        qlist.appendChild(btn);

        //add text to button
        var optText = document.createTextNode(questions[count]["options"][0]);
        btn.appendChild(optText);
        console.log(optText);
        posEl.appendChild(btn);
    
        //the list and buttons
        var qlist = document.createElement("li");
        var btn = document.createElement("button");
        btn.classList.add("answer-button");
        qlist.appendChild(btn);

        //add text to button
        var optText = document.createTextNode(questions[count]["options"][1]);
        btn.appendChild(optText);
        console.log(optText);
        posEl.appendChild(btn);

        //the list and buttons
        var qlist = document.createElement("li");
        var btn = document.createElement("button");
        btn.classList.add("answer-button");
        qlist.appendChild(btn);

        //add text to button
        var optText = document.createTextNode(questions[count]["options"][2]);
        btn.appendChild(optText);
        console.log(optText);
        posEl.appendChild(btn);

        //the list and buttons
        var qlist = document.createElement("li");
        var btn = document.createElement("button");
        btn.classList.add("answer-button");
        qlist.appendChild(btn);

        //add text to button
        var optText = document.createTextNode(questions[count]["options"][3]);
        btn.appendChild(optText);
        console.log(optText);
        posEl.appendChild(btn);
}

function nextQuestion() {
    count++;
    startQuiz();
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