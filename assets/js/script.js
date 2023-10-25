var startButton = document.querySelector(".start");
var questionEl = document.getElementById("question");
var answerButton = document.getElementById("answer-buttons");
var nextButton = document.getElementById("next");
var previousButton = document.getElementById("previous");
var submitButton = document.getElementById("submit");
var currentQuestionIndex = 0;
var score = 0;
 
var questions = [
	{
		question: "What is a function?",
		answers: [
			{ text: "stores a series of characters", correct: false},
			{ text: "block of text that carries out a function", correct: false},
			{text: "block of code that carries out a task", correct: true}, ]
            
		},
		
	
        { question: "What does CSS stand for?",
            answers: [
                { text: "Central style sheet", correct: false},
                { text: "Cascading style sheets", correct: true},
                { text: "Cascading simple sheets", correct: false}, ]
            },
           
        
    
           { question: "What is a function?",
            answers: [
               { text: "stores a series of characters", correct: false},
                { text: "block of text that carries out a function", correct: false},
                { text: "block of code that carries out a task", correct: true}, ]
            },
            
]

   
          /* { question: "What is a function?",
            answers: {
                a: "stores a series of characters",
                b: "block of text that carries out a function",
                c: "block of code that carries out a task",
            },
            correctAnswer: 'c'},
        

           { question: "What is a function?",
            answers: {
                a: "stores a series of characters",
                b: "block of text that carries out a function",
                c: "block of code that carries out a task",
            },
            correctAnswer: 'c'},
        
   
        {
            question: "What is a function?",
            answers: {
                a: "stores a series of characters",
                b: "block of text that carries out a function",
                c: "block of code that carries out a task",
            },
            correctAnswer: 'c'},
        
        {
            question: "What is a function?",
            answers: {
                a: "stores a series of characters",
                b: "block of text that carries out a function",
                c: "block of code that carries out a task",
            },
            correctAnswer: 'c'},
        ] */


var secondsLeft = 60;
var timeEL = document.getElementById("timer");


 /*WHEN I click the start button*/
 // Taken to the next page 
startButton.addEventListener("click", startGame);
function startGame() {
    currentQuestionIndex = 0;
    score = 0;
   document.querySelector(".start").style.display = "none"
//Timer starts from 1 minute 
   function setTime() {
    console.log("hey");
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEL.textContent = secondsLeft + " seconds"

        if(secondsLeft === 0) {
            clearInterval(timerInterval);
        }

    }, 1000);

} 
setTime();  
showQuestion();

}

function showQuestion() {
   

   var currentQuestion = questions[currentQuestionIndex];
   var questionNo = currentQuestionIndex + 1;
   questionEl.innerHTML = questionNo + "." + currentQuestion.question;

   currentQuestion.answers.forEach(answer => {
    var button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButton.appendChild(button);
    
    
   });
}





 
 
 
 

/*WHEN I click the start button
  // Taken to the next page 
  //Timer starts from 1 minute 
  // Presented with first question and multiple choice

THEN a timer starts and I am presented with a question


WHEN I answer a question
  //When right answer is clicked, next question is presented

THEN I am presented with another question


WHEN I answer a question incorrectly
THEN time is subtracted from the clock


WHEN all questions are answered or the timer reaches 0
  // pop up saying "you beat the time!"
  // If not all questions answered then time stops and pop up saying "you lose!"

THEN the game is over
WHEN the game is over
THEN I can save my initials and score */

