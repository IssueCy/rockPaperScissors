var userTake;
const options = ["rock", "paper", "scissors"];

const rules = {
  rock: "scissors",
  paper: "rock",
  scissors: "paper",
};

function randomTake() {
  return options[Math.floor(Math.random() * options.length)];
}

function rock() {
  userTake = "rock";
  var computerTake = randomTake();
  calcReslult(userTake, computerTake);
}

function paper() {
  userTake = "paper";
  var computerTake = randomTake();
  calcReslult(userTake, computerTake);
}

function scissors() {
  userTake = "scissors";
  var computerTake = randomTake();
  calcReslult(userTake, computerTake);
}

function calcReslult(userTake, computerTake) {
  console.log("YOU: ", userTake, "OPPONENT: ", computerTake);

  var result = document.getElementById("resultHeader");
  var userTakeContainer = document.getElementById("yourOption");
  var computerTakeContainer = document.getElementById("pcOption");

  if (userTake === computerTake) {
    result.innerHTML = "Tie";
  } else if (rules[userTake] === computerTake) {
    result.innerHTML = "You win";
  } else {
    result.innerHTML = "You lose";
  }

  // user
  switch (userTake) {
    case "rock":
      userTakeContainer.innerHTML = `<img src="img/rock.png" style="width:100px; height:auto;">`;
      break;

    case "paper":
      userTakeContainer.innerHTML = `<img src="img/paper.png" style="width:100px; height:auto;">`;
      break;

    case "scissors":
      userTakeContainer.innerHTML = `<img src="img/scissors.png" style="width:100px; height:auto;">`;
      break;

    default:
      return;
  }

  // computer
  switch (computerTake) {
    case "rock":
      computerTakeContainer.innerHTML = `<img src="img/rock.png" style="width:100px; height:auto;">`;
      break;

    case "paper":
      computerTakeContainer.innerHTML = `<img src="img/paper.png" style="width:100px; height:auto;">`;
      break;

    case "scissors":
      computerTakeContainer.innerHTML = `<img src="img/scissors.png" style="width:100px; height:auto;">`;
      break;

    default:
      return;
  }
}

