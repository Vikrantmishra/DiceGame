var randomNumber1 = Math.round(Math.random() * 5) + 1; // Generating a random number between 1 and 6

var img1 = document.getElementsByClassName("img1")[0]; // Using getElementsByClassName

if (randomNumber1 === 1) {
  img1.setAttribute("src", "images/dice1.png");
} else if (randomNumber1 === 2) {
  img1.setAttribute("src", "images/dice2.png");
} else if (randomNumber1 === 3) {
  img1.setAttribute("src", "images/dice3.png");
} else if (randomNumber1 === 4) {
  img1.setAttribute("src", "images/dice4.png");
} else if (randomNumber1 === 5) {
  img1.setAttribute("src", "images/dice5.png");
} else {
  img1.setAttribute("src", "images/dice6.png");
}
var randomNumber2 = Math.round(Math.random() * 5) + 1; // Generating a random number between 1 and 6

var img2 = document.getElementsByClassName("img2")[0]; // Using getElementsByClassName

if (randomNumber2 === 1) {
  img2.setAttribute("src", "images/dice1.png");
} else if (randomNumber2 === 2) {
  img2.setAttribute("src", "images/dice2.png");
} else if (randomNumber2 === 3) {
  img2.setAttribute("src", "images/dice3.png");
} else if (randomNumber2 === 4) {
  img2.setAttribute("src", "images/dice4.png");
} else if (randomNumber2 === 5) {
  img2.setAttribute("src", "images/dice5.png");
} else {
  img2.setAttribute("src", "images/dice6.png");
}
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").textContent = "Player 1 won";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").textContent = "Player 2 won";
} else {
  document.querySelector("h1").textContent = "Draw";
}
