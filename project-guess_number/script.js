"use strict";
let numberRandom = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const btnCheck = document.querySelector(".check");
let numberInput = document.querySelector(".guess");
let number = document.querySelector(".number");
const btnAgain = document.querySelector('.again');

btnCheck.addEventListener("click", () => {
  let newNumberInput = parseFloat(numberInput.value);

  if (newNumberInput === numberRandom) {
    document.querySelector(".message").textContent = "Ви виграли!";
    number.textContent = newNumberInput;
    document.querySelector("body").style.background = "green";
    if (score > highScore) {
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
    }
  } else if (newNumberInput !== numberRandom) {
    if (score > 1) {
      if (newNumberInput > numberRandom) {
        document.querySelector(".message").textContent = "Занадто багато!";
        score--;
        document.querySelector(".score").textContent = score;
      } else if (newNumberInput < numberRandom) {
        document.querySelector(".message").textContent = "Занадто мало!";
        score--;
        document.querySelector(".score").textContent = score;
      }
    } else {
      document.querySelector(".message").textContent = "Ви програли!";
      document.querySelector(".score").textContent = 0;
    }
  }
});

btnAgain.addEventListener('click', () => {
    score = 20;
    numberRandom = Math.trunc(Math.random() * 20) + 1;
    document.querySelector(".message").textContent = "Почніть вгадувати!";
    document.querySelector(".score").textContent = score;
    number.textContent = "?";
    numberInput.value = "";
    document.querySelector("body").style.background = "black";
});