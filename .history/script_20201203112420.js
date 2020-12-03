var startQuizBtn = document.getElementById("start-quiz-btn");
var question = [
    {
        statement: 'What Defines an HTML Element',
        choices: ['start tag', 'some content', 'end tag', 'all the above'],
        correct: 'all the above'
    },
    {
        statement: 'What does HTML stand for',
        choices: ['Hyper', 'some content', 'end tag', 'all the above'],
        correct: 'all the above'
    },
    {
        statement: 'What Defines an HTML Element',
        choices: ['start tag', 'some content', 'end tag', 'all the above'],
        correct: 'all the above'
    }

]
welcomeContainer.style.padding = "250px 100px 200px 30px ";

startQuizBtn.addEventListener('click', function() {
 console.log("start")
var welcomeContainer = document.getElementById('welcomeContainer');

welcomeContainer.style.display = 'none';




var questionContainer = document.getElementById("questionContainer")
 questionContainer.style.display = "block";
 questionContainer.setAttribute('class', 'background');


 var 
 /*
 1. need to hide welcom screen
 
 2. shows the 1st question, and all possible choices 
 3. add timer 
 

 */


});
