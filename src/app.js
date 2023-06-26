/* eslint-disable */
/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
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

  function getRandomIndex(max) {
    return Math.floor(Math.random() * max);
  }

  function getRandomCard() {
    const randomSuitIndex = getRandomIndex(suits.length);
    const randomNumberIndex = getRandomIndex(numbers.length);
    const suit = suits[randomSuitIndex];
    const number = numbers[randomNumberIndex];

    return {
      suit,
      number
    };
  }

  function miCarta() {
    const card = getRandomCard();
    const cartaElement = document.getElementById("carta");
    const suitTopElement = cartaElement.querySelector(".suit-top");
    const suitBottomElement = cartaElement.querySelector(".suit-bottom");
    const numberElement = cartaElement.querySelector(".number");

    suitTopElement.textContent = card.suit;
    suitBottomElement.textContent = card.suit;
    numberElement.textContent = card.number;

    if (card.suit === "♥" || card.suit === "♦") {
      suitTopElement.classList.add("suit-red");
      suitBottomElement.classList.add("suit-red");
    } else {
      suitTopElement.classList.remove("suit-red");
      suitBottomElement.classList.remove("suit-red");
    }
  }

  // Initialize the card when the page loads
  miCarta();
};
