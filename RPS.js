function userChoice(userOption) {
  var computerChoice = Math.floor(Math.random()*1000 + 1) % 3;
  var userValue = getValue(userOption);
  var winner = decideWinner(userValue,computerChoice);
  document.getElementById("winner").innerHTML = winner;
  document.getElementById("yourChoice").innerHTML = userOption.innerHTML;
  document.getElementById("computerChoice").innerHTML = decryptValue(computerChoice);
  document.getElementById("instruction").style.display = "none";
  document.getElementById("choices").style.display = "none";
  document.getElementById("results").style.display = "block";
}

function getValue(userOption) {
  var userValue = 0;
  switch (userOption.innerHTML) {
    case "👊":
      userValue = 0;
      break;
    case "✋":
      userValue = 1;
      break;
    case "✌️":
      userValue = 2;
      break;
    default:
      break;
  }
  return userValue;
}

function decryptValue(value) {
  var choice = "";
  switch (value) {
    case 0:
      choice = "👊";
      break;
    case 1:
      choice = "✋";
      break;
    case 2:
      choice = "✌️";
      break;
    default:
      break;
  }
  return choice;
}
function decideWinner(user,computer) {

  var diff = (computer - user)%3;
  switch (diff) {
    case 1:
    case -2:
      return "Computer wins";
      break;
    case 2:
    case -1:
      return "You win";
      break;
    case 0:
      return "Draw";
      break;
    default:
      alert("Hey");
  }
}

function playAgain() {
  document.getElementById("choices").style.display = "block";
  document.getElementById("instruction").style.display = "block";
  document.getElementById("results").style.display = "none";
}
