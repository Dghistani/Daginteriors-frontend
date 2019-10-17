function Quiz(questions) {
this.score = 0;
this.questions = questions;
this.questionIndex = 0;
}
 
Quiz.prototype.getQuestionIndex = function() {
return this.questions[this.questionIndex];
}
 
Quiz.prototype.guess = function(answer) {
if(this.getQuestionIndex().isCorrectAnswer(answer)) {
this.score++;
}
 
this.questionIndex++;
}
 
Quiz.prototype.isEnded = function() {
return this.questionIndex === this.questions.length;
}
 
 
function Question(text, choices, answer) {
this.text = text;
this.choices = choices;
this.answer = answer;
}
 
Question.prototype.isCorrectAnswer = function(choice) {
return this.answer === choice;
}
 
 
function populate() {
if(quiz.isEnded()) {
showScores();
}
else {
// show question
var element = document.getElementById("question");
element.innerHTML = quiz.getQuestionIndex().text;
 
// show options
var choices = quiz.getQuestionIndex().choices;
for(var i = 0; i < choices.length; i++) {
var element = document.getElementById("choice" + i);
element.innerHTML = choices[i];
guess("btn" + i, choices[i]);
}
 
showProgress();
}
};
 
function guess(id, guess) {
var button = document.getElementById(id);
button.onclick = function() {
quiz.guess(guess);
populate();
}
};
 
 
function showProgress() {
var currentQuestionNumber = quiz.questionIndex + 1;
var element = document.getElementById("progress");
element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};
 
function showScores() {
var gameOverHTML = "<h1>Result</h1>";
gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
var element = document.getElementById("quiz");
element.innerHTML = gameOverHTML;
};
 

var questions = [
new Question("How many bits are in a value?", ["4 bits", "3 bits","12 bits", "2 bits"], "4 bits"),
new Question("How many days do we have in a week?", ["5 days", "7 days", "10 days", "3 days"], "7 days"),
new Question("How many days are there in a years?", ["300 days", "350 days","360 days", "365 days"], "365 days"),
new Question("Which day comes after friday?", ["Friday", "Saturday", "Sunday", "All"], "Saturday"),
new Question("How many letters are there in English alphabet?", ["30", "20", "25", "26"], "26")
];

// function randomQues (){
// var randomIndex = Math.floor(Math.random() * questions.length);

// questionElement.innerHTML = questions[randomIndex].question;

// for (let i = 0; i < answersElements.length; i++) {
//   answersElements[i].innerHTML = questions[randomIndex].answers[i];
// }
 
// create quiz
var quiz = new Quiz(questions);
 
// display quiz
populate();

console.log(questions);