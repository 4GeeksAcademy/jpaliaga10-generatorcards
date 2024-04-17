/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  // Add event listener to the generate button
  document
    .getElementById("generateButton")
    .addEventListener("click", generateCard);
};

function generateCard() {
  let card = document.querySelector(".card");
  let randomSuit = generateRandomSuit();
  card.className = "card";
  card.classList.add(randomSuit);
  card.querySelector(
    ".top-suit i"
  ).className = `bi bi-suit-${iconClasses[randomSuit]}`;
  card.querySelector(
    ".bottom-suit i"
  ).className = `bi bi-suit-${iconClasses[randomSuit]}`;
  card.querySelector(".number").innerHTML = generateRandomNumber();
}

// Define the object that maps suit names to icon class names
let iconClasses = {
  diamond: "diamond-fill red",
  spade: "spade-fill",
  heart: "heart-fill red",
  club: "club-fill"
};

let generateRandomNumber = () => {
  let numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let indexNumbers = Math.floor(Math.random() * numbers.length);
  return numbers[indexNumbers];
};

let generateRandomSuit = () => {
  let suit = ["diamond", "spade", "heart", "club"];
  let indexSuit = Math.floor(Math.random() * suit.length);
  return suit[indexSuit];
};
