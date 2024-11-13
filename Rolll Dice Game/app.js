let gemer1 = prompt("Write your name, Mr Player 1");
let gemer2 = prompt("Write your name, Mr Player 2");

document.querySelector(".namee1").innerHTML = gemer1;
document.querySelector(".namee2").innerHTML = gemer2;

alert(`${gemer1} it's your turn`);

const active1 = document.querySelector(".player1");
const active2 = document.querySelector(".player2");

active1.classList.add("turnn");
active2.classList.remove("turnn");

let activePlayer = true; 
let activeScore1 = 0;
let activeScore2 = 0;

function rollDice() {
  const dice = document.querySelector("img");

    dice.style.animation = 'none';
    dice.offsetHeight; 
    dice.style.animation = 'rollDice 0.4s ease-in-out';

    const randomDice = Math.ceil(Math.random() * 6);
    dice.src = `./images/${randomDice}.PNG`;

  if (randomDice !== 1) {
    if (activePlayer) {
      activeScore1 += randomDice;
      document.querySelector(".score1").innerHTML = activeScore1;
    } else {
      activeScore2 += randomDice;
      document.querySelector(".score2").innerHTML = activeScore2;
    }
  } else {
    if (activePlayer) {
      activeScore1 = 0;
      document.querySelector(".score1").innerHTML = activeScore1;
    } else {
      activeScore2 = 0;
      document.querySelector(".score2").innerHTML = activeScore2;
    }
    activePlayer = !activePlayer;
    active1.classList.toggle("turnn");
    active2.classList.toggle("turnn");
  }
}


function hold() {
  if (activePlayer) {
    let score1Html = document.querySelector(".holdScore1");
    score1Html.innerHTML = +score1Html.innerHTML + activeScore1;
    activeScore1 = 0;
    document.querySelector(".score1").innerHTML = activeScore1;

    if ((score1Html.innerHTML) >= 20) {

      let resultDisplay = document.getElementById("resultDisplay");
      resultDisplay.innerHTML = `Winner is ${gemer1}`;
      resultDisplay.style.display = "block";

    
      setTimeout(function () {
        location.href = 'index.html';
      }, 4000);
    }
    
  } else {
    let score2Html = document.querySelector(".holdScore2");
    score2Html.innerHTML = +score2Html.innerHTML + activeScore2;
    activeScore2 = 0;
    document.querySelector(".score2").innerHTML = activeScore2;

    if ((score2Html.innerHTML) >= 20) {

      let resultDisplay = document.getElementById("resultDisplay");
      resultDisplay.innerHTML = `Winner is ${gemer2}`;
      resultDisplay.style.display = "block";
      setTimeout(function () {
        location.href = 'index.html';
      }, 4000);
    }
  }

  activePlayer = !activePlayer;
  active1.classList.toggle("turnn");
  active2.classList.toggle("turnn");
}




function restartt() {
  
  location.href = 'index.html'
}


