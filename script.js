var startQuizBtn = document.getElementById("start-quiz-btn");
var questions = [
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
  //var response =  window.statement(questions[i].statement);
 //  if (response == question[i].correct){

  // } else {
    //   alert ("wrong")
 //timer function - timer
 //}
   
//}
//  var minutesDisplay = document.querySelector("#minutes");
 var secondsDisplay = document.querySelector("#seconds");
// var coundownTimer=  minutesDisplay.innerHTML
// for loop ()

var time =100

var setMyTime;

function myTimer() {
    time = time - 1;
    secondsDisplay.innerHTML = time 
 if (time == 0){
    //time should clear
    clearInterval(setMyTime)
    //quiz should end- show endding page
 }
 
}


startQuizBtn.addEventListener('click', function() {
    console.log('here')

    setMyTime = setInterval(myTimer, 1000)
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
statement.innerText = questions[currentQuestion].statement
for (var i = 0; i < questions[currentQuestion].choices.length; i ++ ){
if (i === 0) {
    choiceA.innerText = questions[currentQuestion].choices[i]
    choiceA.addEventListener("click", function(event){
if (currentQuestion === 0 || currentQuestion === 1 || currentQuestion === 2){
 wrongAnswer()
}

    })
}
else if (i == 1 ){
    choiceB.innerText = questions[currentQuestion].choices[i]
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
    choiceD.innerText = questions[currentQuestion].choices[i]
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
 