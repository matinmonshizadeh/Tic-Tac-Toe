// (1)-------------------------------------------------------------------------------------------------
// Random Number 1
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage1 = "images/dice" + randomNumber1 + ".png";

document.querySelector(".img1").setAttribute("src", randomDiceImage1);


// Random Number 2
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";

document.querySelector(".img2").setAttribute("src", randomDiceImage2);


if (randomNumber1 == randomNumber2) {
  document.querySelector("h1").innerHTML = "Draw!";
  document.querySelectorAll(".dice")[0].classList.add("diceDraw");
  document.querySelectorAll(".dice")[1].classList.add("diceDraw");
} else if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
  document.querySelectorAll(".dice")[0].classList.remove("diceDraw");
  document.querySelectorAll(".dice")[1].classList.remove("diceDraw");
    document.querySelectorAll(".dice")[0].classList.add("diceWinner");
    document.querySelectorAll(".dice")[1].classList.remove("diceWinner");
    document.querySelectorAll(".dice")[1].classList.add("diceLosser");
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
  document.querySelectorAll(".dice")[0].classList.remove("diceDraw");
  document.querySelectorAll(".dice")[1].classList.remove("diceDraw");
  document.querySelectorAll(".dice")[0].classList.remove("diceWinner");
  document.querySelectorAll(".dice")[0].classList.add("diceLosser");
  document.querySelectorAll(".dice")[1].classList.add("diceWinner");
}



// (2)-------------------------------------------------------------------------------------------------
/*
// Random Number 1
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

if (randomNumber1 == 1) {
  document.querySelector(".img1").setAttribute("src", "images/dice1.png");
} else if (randomNumber1 == 2) {
  document.querySelector(".img1").setAttribute("src", "images/dice2.png");
} else if (randomNumber1 == 3) {
  document.querySelector(".img1").setAttribute("src", "images/dice3.png");
} else if (randomNumber1 == 4) {
  document.querySelector(".img1").setAttribute("src", "images/dice4.png");
} else if (randomNumber1 == 5) {
  document.querySelector(".img1").setAttribute("src", "images/dice5.png");
} else if (randomNumber1 == 6) {
  document.querySelector(".img1").setAttribute("src", "images/dice6.png");
}

// Random Number 2
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

if (randomNumber2 == 1) {
  document.querySelector(".img2").setAttribute("src", "images/dice1.png");
} else if (randomNumber2 == 2) {
  document.querySelector(".img2").setAttribute("src", "images/dice2.png");
} else if (randomNumber2 == 3) {
  document.querySelector(".img2").setAttribute("src", "images/dice3.png");
} else if (randomNumber2 == 4) {
  document.querySelector(".img2").setAttribute("src", "images/dice4.png");
} else if (randomNumber2 == 5) {
  document.querySelector(".img2").setAttribute("src", "images/dice5.png");
} else if (randomNumber2 == 6) {
  document.querySelector(".img2").setAttribute("src", "images/dice6.png");
}



if(randomNumber1 == randomNumber2){
  document.querySelector("h1").innerHTML = "Draw!";
}else if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
}else if(randomNumber1 < randomNumber2){
  document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
}
*/
