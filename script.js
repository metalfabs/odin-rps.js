// Rock Paper Scissors Simulator 2022 (Early access)
'use strict';

function computerPlay(){
  const num = Math.floor(Math.random() * 3);
  switch (num){
    case 0:
      return "rock";
      break;
    case 1:
      return "paper";
      break;
    case 2:
      return "scissors";
      break;
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

function playRound(plr, comp){
  if (plr == false){
    return "Error in processing the round";
  } else if (plr == comp){
    return `It's a tie! Both players have chosen ${comp}`;
  } else {
    return `Someone wins, but I'm not sure who:\n
      Player chose ${plr}, and Computer chose ${comp}.`
  } 
}

console.log(playRound(playerSelect(), computerPlay()));

