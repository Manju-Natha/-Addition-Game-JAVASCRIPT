let firstNumberElement = document.getElementById("firstNumber");
let secondNumberElement = document.getElementById("secondNumber");
let userInputElement = document.getElementById("userInput");
let gameResultElment = document.getElementById("gameResult");

let successMessage = "Congratulations! you got it Right";
let tryAgainMessage = "Please! Try Again";

function restartGame() {
  let firstRandomNumber = Math.random() * 100;
  let secoundRandomMumber = Math.random() * 100;
  firstNumberElement.textContent = Math.ceil(firstRandomNumber);
  secondNumberElement.textContent = Math.ceil(secoundRandomMumber);
  gameResultElment.textContent = "";
  userInputElement.textContent = "";
}

restartGame();

function checkResult() {
  let firstNumber = parseInt(firstNumberElement.textContent);
  let secoundNumber = parseInt(secondNumberElement.textContent);
  let userOf = parseInt(userInputElement.value);
  let sunAll = firstNumber + secoundNumber;
  if (userOf === sunAll) {
    gameResultElment.textContent = successMessage;
    gameResultElment.style.backgroundColor = "#028a0f";
  } else {
    gameResultElment.textContent = tryAgainMessage;
    gameResultElment.style.backgroundColor = "#1e217c";
  }
}
