const questions = [
    {
        question: "What is html", answers: "Html is the skeleton of the website", choices: ["skin", "clothes", "Html is the skeleton of the website", "hyper-markdown-language"]
    },
    {
        question: "What is CSS", answers: "Adds creative look to a website", choices: ["Water", "ketchup", "hyper-markdown-language", "Adds creative look to a website"]

    },
    {
        question: "What is a DOM", answers: "Document Object Model", choices: ["Potatoe", "hair", "Document Object Model", "hyper-markdown-language"]
    },
    {
        question: "What is JavaScript", answers: "Javascript bring the page to Life", choices: ["Javascript bring the page to Life", "waterfall", "drones", "hyper-markdown-language"]

    }

];
let time = 30;
var startQuiz = document.getElementById("start-quiz");
// var quizOver = false;
var timerWorks
var timeShow = document.getElementById("time")


let questionPos = 0;
startQuiz.addEventListener("click", function () {
    loadQuestions(questions[0]);
    timerWorks = setInterval(clock, 1000)
    timeShow.textContent = time
});
function loadQuestions(x) {
    for (let i = 0; i < x.choices.length; i++) {
        document.getElementById("choice" + i).innerHTML = x.choices[i]
        document.getElementById("choice" + i).addEventListener("click", function () { checkAnswer(i) })
        timeShow.textContent = time
    };
    document.getElementById("?").innerHTML = x.question
};

function checkAnswer(answer) {
    //questionsPos is question we're on 
    if (questions[questionPos].answers === questions[questionPos].choices[answer]) {
        questionPos = questionPos + 1
        loadQuestions(questions[questionPos])
        console.log("correct")
    }
    else {
        questionPos === "false" + "Wrong";
        time - 4;
        console.log("false");
    }
};
function quizEnd() {
    setTimeout
    clearInterval(timerWorks)
};
//add endgame function
function clock() {
    time--
    timeShow.textContent = time;

    if (time <= 0) {
        quizEnd();
    }

};

























console.log(questions)