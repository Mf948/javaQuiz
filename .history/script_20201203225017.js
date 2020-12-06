var startQuizBtn = document.getElementById("start-quiz-btn");
var question = [
    {
        statement: 'What Defines an HTML Element',
        choices: ['start tag', 'some content', 'end tag', 'all the above'],
        correct: 'all the above'
    },
    {
        statement: 'How do you write "Hello World" in an alert box',
        choices: ['A', 'some content', 'end tag', 'all the above'],
        correct: 'all the above'
    },
    {
        statement: 'What Defines an HTML Element',
        choices: ['start tag', 'some content', 'end tag', 'all the above'],
        correct: 'all the above'
    }

]

welcomeContainer.style.padding = "250px 100px 200px 30px ";


 //for (var i=0; i < questions.length; i ++){
  // var response =  window.statement(questions[i].statement);
   // if (response == question[i].correct){

//    } else {
//        alert ("wrong")
// timer function - timer  
//    }
   
// }
 var minutesDisplay = document.querySelector("#minutes");
var secondsDisplay = document.querySelector("#seconds");

startQuizBtn.addEventListener('click', function() {
welcomeContainer.style.display = 'none';


var questionContainer = document.getElementById("questionContainer")
 questionContainer.style.display = "block";
 questionContainer.setAttribute('class', 'background');

 
var statement =document.getElementById("statement")
var choiceA = document.getElementById("choice-A-btn")

var choiceB = document.getElementById("choice-B-btn")
var choiceC = document.getElementById("choice-C-btn")
var choiceD = document.getElementById("choice-D-btn")
 
var correct = true 

var count = 0 

function showQuestion() {
statement.innerText = question[count].statement
for (var i = 0; i < question[count].choices.length; i ++ ){
if (i === 0) {
    choiceA.innerText = question[count].choices[i]
    console.log()
}

}
}
showQuestion()
 
   //  choiceA.innerText 

 

 //var questionContainer = document.getElementById("question")
 /*
 1. need to hide welcom screen
 
 2. shows the 1st question, and all possible choices 
 
 3. add timer 
 

 */

///WHEN I answer a question incorrectly
//THEN time is subtracted from the clock

// WHEN all questions are answered or the timer reaches 0 THEN the game is over
// WHEN the game is over THEN I can save my initials and score
});
 