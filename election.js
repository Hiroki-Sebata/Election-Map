var createPolitician = function(name,partycolor){
 
    var politician = {}; // new blank object!
    politician.name = name; // set name property to the value of the name parameter
    politician.electionResults = null;
    politician.totalVotes = 0;
  politician.partycolor=partycolor;
  
    
    return politician;
 
};
 
var trump = createPolitician("Trump",[132, 17, 11]);
trump.electionResults = [4, 2, 4, 4, 22, 3, 3, 1, 2, 15, 8, 1, 3, 9, 0, 6, 1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 3, 2, 2, 6, 2, 14, 0, 1, 6, 7, 3, 7, 3, 6, 1, 3, 17, 3, 1, 2, 11, 2, 3, 1];
trump.tallyUpTotalVotes = function(name){
 
    this.totalVotes = 0;
    
    for (var i = 0; i < this.electionResults.length; i++){
        this.totalVotes = this.totalVotes + this.electionResults[i];
    }
 
};
trump.tallyUpTotalVotes();
console.log(trump.totalVotes);

 
var baiden = createPolitician("Biden",[245, 141, 136]);
baiden.electionResults = [5, 1, 7, 2, 33, 6, 4, 2, 1, 14, 8, 3, 1, 11, 11, 0, 5, 3, 3, 3, 7, 4, 8, 9, 3, 7, 2, 2, 4, 2, 8, 3, 15, 15, 2, 12, 0, 4, 13, 1, 3, 2, 8, 21, 3, 2, 11, 1, 3, 7, 2];
baiden.tallyUpTotalVotes = function(name){
 
    this.totalVotes = 0;
    
    for (var i = 0; i < this.electionResults.length; i++){
        this.totalVotes = this.totalVotes + this.electionResults[i];
    }
 
};
baiden.tallyUpTotalVotes();
var setStateResults=function(state){
  
  theStates[state].winner=null;
  if  (trump.electionResults[state]>baiden.electionResults[state]){
    theStates[state].winner=trump;
  }
  else if(trump.electionResults[state]<baiden.electionResults[state]){
    theStates[state].winner=baiden;
    var stateResults=document.getElementById("stateResults");
var header=stateResults.children[0];
var body = stateResults.children[1];
var stateName =header.children[0].children[0];
var abbreviation=header.children[0].children[1];
var candidate1=body.children[0].children[0];
var candidate1Result=body.children[0].children[1];
var candidate2=body.children[1].children[0];
var candidate2Result=body.children[1].children[1];
var winner=body.children[2].children[1];
candidate1.innerText=trump.name;
candidate1Result.innerText=trump.electionResults[state];
candidate2.innerText=baiden.name;
candidate2Result.innerText=baiden.electionResults[state];

if(theStates[state].winner===null){
  winner.innerText="Draw";
}
else{
  (winner.innerText= theStates[state].winner.name);

}
}
  var stateWinner=theStates[state].winner;
  if(stateWinner!==null){
    theStates[state].rgbColor=stateWinner.partycolor;
  }
  else{
    theStates[state].rgbColor=[11,32,57];
  }
};
console.log(baiden.totalVotes);
console.log(baiden.partycolor);

var winner = "???";
 
if (trump.totalVotes > baiden.totalVotes){
    winner = trump.name;
}else if (trump.totalVotes < baiden.totalVotes){
    winner = baiden.name;
}else{
    winner = "DRAW."
}
 
console.log("AND THE WINNER IS..." + winner + "!!!");
var countryTable=document.getElementById('countryResults');

countryTable.children[0].children[0].children[0].innerText="Trump";
countryTable.children[0].children[0].children[1].innerText=trump.totalVotes;
countryTable.children[0].children[0].children[2].innerText="Biden";
countryTable.children[0].children[0].children[3].innerText=baiden.totalVotes;
countryTable.children[0].children[0].children[4].innerText=winner;













