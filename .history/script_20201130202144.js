var startQuizBtn = document.getElementById("start-quiz-btn");
var question = [
    {
        statement: 'What Defines an HTML Element',
        choices: ['start tag', 'some content', 'end tag', 'all the above'],
        correct: 'all the above'
    },
    {
        statement: 'What does HTML stand for',
        choices: ['Hy', 'some content', 'end tag', 'all the above'],
        correct: 'all the above'
    },
    {
        statement: 'What Defines an HTML Element',
        choices: ['start tag', 'some content', 'end tag', 'all the above'],
        correct: 'all the above'
    }

]

startQuizBtn.addEventListener('click', function() {
 console.log("start")
var welcomeContainer = document.getElementById('welcomeContainer');


welcomeContainer.style.display = 'none';



var questionContainer = document.getElementById("questionContainer")
 questionContainer.style.display = "block";

 /*
 1. need to hide welcom screen
 2. shows the 1st question, and all possible choices 

 */


});
