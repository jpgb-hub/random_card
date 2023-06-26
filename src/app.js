/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  const numbers = [
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
  const suits = ["♠", "♣", "♥", "♦"];

  function getRandomCard() {
    const randomNumber = Math.floor(Math.random() * numbers.length);
    const randomSuit = Math.floor(Math.random() * suits.length);
    const suit = suits[randomSuit];

    return {
      suit: suit,
      number: numbers[randomNumber]
    };
  }

  function displayRandomCard() {
    const card = getRandomCard();
    const cardContainer = document.getElementById("cardContainer");

    // Clear previous card
    cardContainer.innerHTML = "";

    const suitElement = document.createElement("div");
    suitElement.className = "suit";
    suitElement.textContent = card.suit;

    const numberElement = document.createElement("div");
    numberElement.className = "number";
    numberElement.textContent = card.number;

    cardContainer.appendChild(suitElement);
    cardContainer.appendChild(numberElement);
  }

  // Display a random card initially
  displayRandomCard();

  // Generate a new random card on button click
  const button = document.createElement("button");
  button.textContent = "Get a Random Card";
  button.addEventListener("click", displayRandomCard);
  document.body.appendChild(button);
};
