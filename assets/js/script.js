var startButton = document.querySelector(".start");
var questionOne = [
	{
		question: "What is a function?",
		answers: {
			a: "stores a series of characters",
			b: "block of text that carries out a function",
			c: "block of code that carries out a task",
		},
		correctAnswer: 'c'
	}]

    var questionTwo = [
        {
            question: "What does CSS stand for?",
            answers: {
                a: "Central style sheet",
                b: "Cascading style sheets",
                c: "Cascading simple sheets",
            },
            correctAnswer: 'b'
        }]
    
    var questionThree = [
        {
            question: "What is a function?",
            answers: {
                a: "stores a series of characters",
                b: "block of text that carries out a function",
                c: "block of code that carries out a task",
            },
            correctAnswer: 'c'
        },]

 /*WHEN I click the start button*/
 // Taken to the next page 
startButton.addEventListener("click", startGame);
function startGame() {
   document.querySelector(".start").style.display = "none"
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

