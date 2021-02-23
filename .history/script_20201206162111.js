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
        statement: 'What is the correct way to write a JavaScript array?',
        choices: ['start tavar colors = 1 = ("red"), 2 = ("green"), 3 = ("blue")', 'var colors = ["red", "green", "blue"]', 'var colors = (1:"red", 2:"green", 3:"blue")', 'var colors = "red", "green", "blue"'],
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
var h3 = document.getElementsByTagName("h3");
h3[0].innerHTML = "Countdown Timer With JS";

var sec         = 1800,
    countDiv    = document.getElementById("#minutes #seconds"),
    secpass,
    countDown   = setInterval(function () {
        'use strict';
        
        secpass();
    }, 1000);

function secpass() {
    'use strict';
    
    var min     = Math.floor(sec / 60),
        remSec  = sec % 60;
    
    if (remSec < 10) {
        
        remSec = '0' + remSec;
    
    }
    if (min < 10) {
        
        min = '0' + min;
    
    }
    countDiv.innerHTML = min + ":" + remSec;
    
    if (sec > 0) {
        
        sec = sec - 1;
        
    } else {
        
        clearInterval(countDown);
        
        countDiv.innerHTML = 'countdown done';
        
    }
}



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
 
var correct = false
var currentQuestion = 0 
var lesstime = -10 
function correctAnswers(){
    alert("yay")
    currentQuestion ++ 
    showQuestion()
}
function wrongAnswer(){
    alert("nay")
    currentQuestion ++

    showQuestion()
}


function showQuestion() {
statement.innerText = question[currentQuestion].statement
for (var i = 0; i < question[currentQuestion].choices.length; i ++ ){
if (i === 0) {
    choiceA.innerText = question[currentQuestion].choices[i]
    choiceA.addEventListener("click", function(event){
if (currentQuestion === 0 || currentQuestion === 1 || currentQuestion === 2){
 wrongAnswer()
}

    })
}
else if (i == 1 ){
    choiceB.innerText = question[currentQuestion].choices[i]
    choiceB.addEventListener("click", function(event){
        if (currentQuestion === 0 ){
         wrongAnswer()
        }
        
            })
}
else if (i == 2 ){
    choiceC.innerText = question[currentQuestion].choices[i]
    choiceC.addEventListener("click", function(event){
        if (currentQuestion === 0 ){
         wrongAnswer()
        }
        
            })
}
else if (i == 3 ){
    choiceD.innerText = question[currentQuestion].choices[i]
    choiceD.addEventListener("click", function(event){
        if (currentQuestion === 0 ){
         correctAnswers()
        }
        
            })
}
}
if (correct == true ){
    alert("yay")
}

}

showQuestion()
 
   //  choiceA.innerText 

 

 //var questionContainer = document.getElementById("question")
 /*
 1. need to hide welcomescreen
 
 2. shows the 1st question, and all possible choices 
 
 3. add timer 
 

 */

///WHEN I answer a question incorrectly
//THEN time is subtracted from the clock

// WHEN all questions are answered or the timer reaches 0 THEN the game is over
// WHEN the game is over THEN I can save my initials and score
});
 