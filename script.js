// Rock Paper Scissors Simulator 2022 (Early access)
'use strict';

function computerPlay(){
  const num = Math.floor(Math.random() * 3);
  switch (num){
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
    default:
      return false;
  }
}

function playerSelect(){
  // prompt user for input 
  let selection = window.prompt("Enter Rock, Paper, or Scissors: ", "prepare yourself");
  // and clean it up.
  if (selection === null){
    window.alert("Come on, try iiiiit");
    return false;
  }

  selection = selection.trim().toLowerCase();
  switch (selection){
    case "rock":
    case "paper":
    case "scissors":
      return selection;
    default:
      window.alert("Your fist shouldn't be able to make that shape. Weird. Try again.");
      return false;
  }
}

var playerWinCount = 0;
var computerWinCount = 0;

function playRound(playerSelection, computerSelection){
  if (playerSelection == false){
    return "Error in processing the round";
  } else if (playerSelection == computerSelection){
    return `It's a tie! Both players have chosen ${computerSelection}`;
    /*Test for computer win conditions*/
  } else if (playerSelection === "rock" && computerSelection === "paper"){
    computerWinCount += 1;
    return `Computer wins!\nPlayer chose ${playerSelection}, and Computer chose ${computerSelection}.`
  } else if (playerSelection === "paper" && computerSelection === "scissors"){
    computerWinCount += 1;
    return `Computer wins!\nPlayer chose ${playerSelection}, and Computer chose ${computerSelection}.`
  } else if (playerSelection === "scissors" && computerSelection === "rock"){
    computerWinCount += 1;
    return `Computer wins!\nPlayer chose ${playerSelection}, and Computer chose ${computerSelection}.`
  } else {
    playerWinCount += 1;
    return `Player wins!\nPlayer chose ${playerSelection}, and Computer chose ${computerSelection}.`
  }
}

//console.log(playRound(playerSelect(), computerPlay()));

function game(){
  for (let i = 0; i < 5; i++){
    console.log(playRound(playerSelect(), computerPlay()));
  } 

  console.log(`Player won ${playerWinCount} rounds.\nComputer won ${computerWinCount} rounds.`);

  if (playerWinCount > computerWinCount){
    console.log(`The winner is:\n\n\nPLAYER!`);
  } else if (computerWinCount > playerWinCount){  
    console.log(`The winner is:\n\n\nCOMPUTER!`);
  } else {
    console.log('It\'s a tie!');
  }
}

game();
