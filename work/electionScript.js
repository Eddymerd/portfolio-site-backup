var createPolitician = function(name, partyColor){
var politician = {};
	politician.name = name; //set name property to value of name parameter
	politician.partyColor = partyColor;
	politician.electionResults = null;
  politician.totalVotes = 0;
	politician.tallyVotes = function() {
	  this.totalVotes = 0;
		for (var i = 0; i < this.electionResults.length; i++) {
this.totalVotes = this.totalVotes + this.electionResults[i];
		  }
	  }
return politician;
}


var politician1 = createPolitician("Harry Potter", [132, 17, 11]);	
var politician2 = createPolitician("Draco Malfoy", [245, 141, 136]);

politician1.electionResults = [5,1,7,2,33,6,4,2,1,14,8,3,1,11,11,0,5,3,3,3,7,4,8,9,3,7,2,2,4,2,8,3,15,15,2,12,0,4,13,1,3,2,8,21,3,2,11,1,3,7,2];
politician2.electionResults = [4,2,4,4,22,3,3,1,2,15,8,1,3,9,0,6,1,5,5,1,3,7,8,1,3,3,1,3,2,2,6,2,14,0,1,6,7,3,7,3,6,1,3,17,3,1,2,11,2,3,1];


politician1.electionResults[9] = 1;
politician2.electionResults[9] = 28;
 
politician1.electionResults[4] = 17;
politician2.electionResults[4] = 38;

politician1.electionResults[43] = 11;
politician2.electionResults[43] = 27;

//console.log(politician1.electionResults);
//console.log(politician2.electionResults);

var setStateResults = function(state) {

	theStates[state].winner = null;


 if (politician1.electionResults[state] > politician2.electionResults[state]) {
 	 theStates[state].winner = politician1;
 	}
    
else if (politician1.electionResults[state] < politician2.electionResults[state]) {
    theStates[state].winner = politician2; 
    }

    var stateWinner = theStates[state].winner;

    if (stateWinner !== null) {
		theStates[state].rgbColor = stateWinner.partyColor;
	}
	else {
		theStates[state].rgbColor = [11, 32, 57];
	}

// UPDATE TABLE THAT DISPLAYS INDIVIDUAL STATE WINNERS

var stateInfoTable = document.getElementById("stateResults");
var header = stateInfoTable.children[0];
var body = stateInfoTable.children[1];
var stateName = header.children[0].children[0];
var abbrev = header.children[0].children[1];
var candidate1Name = body.children[0].children[0];
var candidate1Results = body.children[0].children[1];
var candidate2Name = body.children[1].children[0];
var candidate2Results = body.children[1].children[1];
var winnersName = body.children[2].children[1];

stateName.innerText = theStates[state].nameFull;
abbrev.innerText = theStates[state].nameAbbrev;
candidate1Name.innerText = politician1.name;
candidate1Results.innerText = politician1.electionResults[state];
candidate2Name.innerText = politician2.name;
candidate2Results.innerText = politician2.electionResults[state];

if (theStates[state].winner !== null) {
	winnersName.innerText = theStates[state].winner.name;
  }
else {
	winnersName.innerText = "Draw";
  }

}

politician1.tallyVotes();
politician2.tallyVotes();

var winner ;
 if (politician1.totalVotes > politician2.totalVotes){
 	winner = politician1.name;
 }
 else if (politician2.totalVotes > politician1.totalVotes) {
 	winner = politician2.name;
 }
 else {
 	winner = "A DRAW!";
 }
console.log(politician1.totalVotes);
console.log(politician2.totalVotes);
console.log("The winner of the election is " + winner)
//console.log("Harry's color is " + politician1.partyColor);
//console.log("Draco's color is " + politician2.partyColor);


var countryTable = document.getElementById("countryResults");
var row = countryTable.children[0].children[0];

row.children[0].innerText = politician1.name;
row.children[1].innerText = politician1.totalVotes;
row.children[2].innerText = politician2.name;
row.children[3].innerText = politician2.totalVotes;
row.children[5].innerText = winner;

