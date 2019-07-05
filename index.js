'use strict';

let questionNumer=0;

let score=0;


function renderLandingPage () {
//this function will be resposible for rendering the landing page in the DOM

	console.log('`renderLandingPage` ran');
}

function changeQuestionNumber(){
	//increment the question number
}

function changeScore(){
	//increment the user score
}

function handleClickToStart (){
	//this function will be responsible for when the user clicks the "I'm ready" button to start the quiz

	console.log('`handleClickToStart` ran');
}

function generateQuestion (){
	//this function will be responsible for generating the question HTML
	console.log('`generateQuestion` ran');
}

function renderQuestion(){
	//render the question in the DOM
}

function selectAnswer(){
	//user clicks on an answer 
}

function upDateScoreText(){
	//this function is responsible for updating the text of the score the users see
}

function ifAnswerIsCorrect(){

}

function ifAnswerIsIncorrect(){

}

function answerCorrectFeedback() {
	// displays feedback the user sees if they answer correctly
	ifAnswerIsCorrect();
	upDateScore();
}

function answerIncorrectFeedback(){
	//displays feedback the user sees if they answer incorrectly
	ifAnswerIsIncorrect();
}

function nextQuestion (){
	//what happens when the user clicks "Next"
	changeQuestionNumber();
	renderQuestion();
	selectAnswer();
}

function renderResults(){
	//responsible for the HTML for when the quiz is over
}

function startQuizOver(){
	//reloads the page to start quiz over
}

function createQuiz () {
  handleClickToStart();
  renderQuestion();
  selectAnswer();
  NextQuestion();
}

$(createQuiz);

