

let questionNumber=0;

let score=0;


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
    	<button type="submit" class="submit">Submit</button>
    	</fieldset>
    	</form>
    </div>`;
}else{
	renderResults();
}

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

function changeScore(){
	score ++;
}

function selectAnswer(){
	$('main').on('click', '.submit', function(event){
		event.preventDefault();
		let userAnswer = $('input:checked').val();

		console.log('ua',userAnswer);
		
		let correctAnswer = STORE[questionNumber].correctAnswer;

		console.log('ca',correctAnswer);

		if (userAnswer === correctAnswer) {

			ifAnswerIsCorrect();
			console.log('You are correct!');
		}
		else {
			ifAnswerIsIncorrect();
			console.log('You are incorrect!');
		}

		console.log('select answer ran!');
		// $('.questionForm').html(`<button type=button class="nextButton">Next</button></div>`);
	});

}

function upDateScoreText(){
	changeScore();
	$('.score').text(score);
}

function ifAnswerIsCorrect(){
	$('.questionForm').html(`<div class="correctFeedback"><p>You got it right!</p><button type=button class="nextButton">Next</button></div>`);
	console.log('if answer correct ran!');
	upDateScoreText();
}

function ifAnswerIsIncorrect(){
	let correctAnswer = `${STORE[questionNumber].correctAnswer}`;

	$('.questionForm').html(`<div class="correctFeedback"><p><b>Whomp whomp... That's not quite right.</b><br>The correct answer is: <br> <span><i>"${correctAnswer}"</i></span></p><button type=button class="nextButton">Next</button></div>`);
	console.log('if answer incorrect ran!')

}

/*function answerCorrectFeedback() {
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
	selectAnswer();
}

function renderResults(){
	if (score == 10){
		$('.questionForm').html(`<div class= "results successfulFeedback"><h3>Perfect score!<br>You're flying high!</h3><p>You're ready to rig at Sky Candy!</p></div><button class="restartButton">Restart Quiz</button></div>`);
	}

	else if (score >= 8 && score < 10){
		$('.questionForm').html(`<div class= "results almostThereFeedback"><h3>${score} out of 10.<br>You're almost there!</h3><p>Just a few things to review and then retake this quiz!</p><button class="restartButton">Restart Quiz</button></div>`);
	}

	else{
		$('.questionForm').html(`<div class= "results unsuccessfulFeedback"<h3>${score} out of 10.<br>You've got some studying to do!</h3><p>Please go study your rigging training materials thoroughly and then retake the quiz.</p><button class="restartButton">Restart Quiz</button></div>`);
	}
	removeCounter();

	console.log(score);

	startQuizOver();
}

function removeCounter(){
	$('.right-corner').remove();
	console.log('remove counter ran!');
}

function startQuizOver(){
	$('main').on('click','.restartButton', function(event){
    	location.reload();
		console.log('restart clicked!');
	});
}

function createQuiz () {
  handleClickToStart();
  console.log('create quiz ran!')
  nextQuestion();
  //selectAnswer();
 // NextQuestion();
}

$(createQuiz);

//console.log (STORE[0]);

