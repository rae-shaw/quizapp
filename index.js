

let questionNumber=0;

//let score=0;


/*function renderLandingPage () {
//this function will be resposible for rendering the landing page in the DOM

	console.log('`renderLandingPage` ran');
}*/


function handleClickToStart (){

	$('.quizStart').on('click', '.startButton', function(event) {
		$('.quizStart').remove();

		event.preventDefault();
		renderQuestion();

		console.log('Clicked start button!');
		/*$('.questionForm').css('display', 'block');
    	$('.questionNumber').text(1);*/

		});
	//this function will be responsible for when the user clicks the "I'm ready" button to start the quiz
}


//this function will be responsible for generating the question HTML
function generateQuestion (){
	if (questionNumber < STORE.length) {
		return `<div class="question-${questionNumber}">
    	<h2>${STORE[questionNumber].question}</h2>
    	<form>
    	<fieldset>
    	<label class="answerOption">
    	<input type="radio" value="${STORE[questionNumber].answers[0]}" name="answer" required>
    	<span>${STORE[questionNumber].answers[0]}</span>
    	</label>
    	<label class="answerOption">
    	<input type="radio" value="${STORE[questionNumber].answers[1]}" name="answer" required>
    	<span>${STORE[questionNumber].answers[1]}</span>
    	</label>
    	<label class="answerOption">
    	<input type="radio" value="${STORE[questionNumber].answers[2]}" name="answer" required>
    	<span>${STORE[questionNumber].answers[2]}</span>
    	</label>
    	<label class="answerOption">
    	<input type="radio" value="${STORE[questionNumber].answers[3]}" name="answer" required>
    	<span>${STORE[questionNumber].answers[3]}</span>
    	</label>
    	<button type="submit" class="nextButton">Next</button>
    	</fieldset>
    	</form>
    </div>`;
}

	/*else{
	console.log('no generator!');
}*/

	console.log('generate question ran');
}



function renderQuestion(){

	console.log('render question ran!');

	$('.questionForm').html(generateQuestion());

}

function changeQuestionNumber(){
		questionNumber ++;

	$('.questionNumber').text(questionNumber+1);
	console.log(questionNumber);
	
}

/*function changeScore(){
	//increment the user score
}

function selectAnswer(){
	

}

/*function upDateScoreText(){
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
}*/

function nextQuestion (){
	$('main').on('click','.nextButton', function(event) {

	changeQuestionNumber();
	console.log('next question click ran!')
	renderQuestion();
	});
	//selectAnswer();
}

/*function renderResults(){
	//responsible for the HTML for when the quiz is over
}

function startQuizOver(){
	//reloads the page to start quiz over
}*/

function createQuiz () {
  handleClickToStart();
  console.log('create quiz ran!')
  nextQuestion();
  //selectAnswer();
 // NextQuestion();
}

$(createQuiz);

//console.log (STORE[0]);

