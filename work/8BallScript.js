$(document).ready(function(){
var magicBall = {};
magicBall.listofAnswers= ["Yes", "No", "Maybe", "Definitely", "Definitely Not", "Ask again later", "Certainly", "Not in a Million Years", "Can't predict Now", "Most Likely", "Don't Bet on it", "Answer hazy, try again later",  "Possibly", "Very Doubtful", "Concentrate and ask again"]

	$("#answer").hide();
//define the method
magicBall.askQuestion = function (question){
	$("#answer").fadeIn(4000);
	//create random number
	var randomNum = Math.random();
	//make into whole number
	var randomAnswer = randomNum * this.listofAnswers.length;
	var answerIndex = Math.floor(randomAnswer) ;
	var answer = this.listofAnswers[answerIndex];
	$("#answer").text(answer);
	$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballAnswer.png");
	console.log(question);
	console.log(answer);
}

var onClick = function() {
	$("#8ball").effect( "shake" );
	$("#answer").hide();
	$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballQuestion.png");
	setTimeout(
    function() {
      var question = prompt("Ask a yes or no question.");
      magicBall.askQuestion(question);
    }, 500);
	
	
	$("#answer").fadeIn(4000);
}
//magicBall.askQuestion("Will I  pass Javascript?");
$("#questionButton").click(onClick);

});