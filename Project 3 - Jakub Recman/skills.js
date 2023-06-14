const compChoice = document.getElementById("comp-choice");
const resultDisplay = document.getElementById("result");
const possibilities = document.querySelectorAll("button");
const userDisplay = document.getElementById("user-choice");
const main = document.querySelector(".games-section");

let userChoice;

possibilities.forEach((item) => {
  item.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userDisplay.textContent = userChoice;
    randomNumber();
    results();
    endgame();
    scoreCounter();
    colors();
  });
});
let comouterChoice;
function randomNumber() {
  const number = Math.ceil(Math.random() * possibilities.length);
  if (number == 1) {
    comouterChoice = "Kámen";
  }
  if (number == 2) {
    comouterChoice = "Nůžky";
  }
  if (number == 3) {
    comouterChoice = "Papír";
  }
  compChoice.textContent = comouterChoice;
}

let prohra = 0;
let vyhra = 0;

function results() {
  if (userChoice == comouterChoice) {
    resultDisplay.textContent = "Remíza";
  }
  if (userChoice == "Kámen" && comouterChoice == "Papír") {
    resultDisplay.textContent = "Prohra";
    prohra = prohra + 1;
    scoreCounterForComputer(prohra);
  }
  if (userChoice == "Kámen" && comouterChoice == "Nůžky") {
    resultDisplay.textContent = "Výhra";
    vyhra = vyhra + 1;
    scoreCounterForPlayer(vyhra);
  }
  if (userChoice == "Nůžky" && comouterChoice == "Papír") {
    resultDisplay.textContent = "Výhra";
    vyhra = vyhra + 1;
    scoreCounterForPlayer(vyhra);
  }
  if (userChoice == "Nůžky" && comouterChoice == "Kámen") {
    resultDisplay.textContent = "Prohra";
    prohra = prohra + 1;
    scoreCounterForComputer(prohra);
  }
  if (userChoice == "Papír" && comouterChoice == "Nůžky") {
    resultDisplay.textContent = "Prohra";
    prohra = prohra + 1;
    scoreCounterForComputer(prohra);
  }
  if (userChoice == "Papír" && comouterChoice == "Kámen") {
    resultDisplay.textContent = "Výhra";
    vyhra = vyhra + 1;
    scoreCounterForPlayer(vyhra);
  }
}

const endgame = () => {
  if (vyhra >= 10) {
    // scoreCounter("Hráč vítězí");
    createDiv("Vítězství");
  }
  if (prohra >= 10) {
    // scoreCounter("Počítač vítězí");
    createDiv("GAME OVER");
  }
  if (prohra == 10 || vyhra == 10) {
    possibilities.forEach((x) => {
      x.style.visibility = "hidden";
    });
  }
};

const counterSection = document.querySelector(".counter-section");
const scoreCounter = (napln) => {
  const paragraph = document.createElement("h2");
  paragraph.textContent = napln;
  counterSection.appendChild(paragraph);
};

const scorePlayer = document.querySelector(".player");
const scoreComputer = document.querySelector(".computer");
const scoreCounterForComputer = (x) => {
  scoreComputer.textContent = x;
};
const scoreCounterForPlayer = (x) => {
  scorePlayer.textContent = x;
};

const colors = () => {
  if (vyhra > prohra) {
    scorePlayer.style.color = "green";
    scoreComputer.style.color = "red";
  }
  if (vyhra < prohra) {
    scorePlayer.style.color = "red";
    scoreComputer.style.color = "green";
  }
};

const createDiv = (obsah) => {
  const div = document.createElement("div");
  div.textContent = obsah;
  main.appendChild(div);
  div.classList.add("create-div");
  const divTwo = document.createElement("div");
  body.appendChild(divTwo);
  divTwo.classList.add("modal");
  const playAgain = document.createElement("div");
  playAgain.textContent = "Hrát znovu";
  div.appendChild(playAgain);
  playAgain.classList.add("play-again");
  const quit = document.createElement("div");
  quit.textContent = "Odejít";
  div.appendChild(quit);
  quit.classList.add("quit");

  playAgain.addEventListener("click", () => {
    window.location.href = "skills.html";
  });
  quit.addEventListener("click", () => {
    window.location.href = "index.html";
  });
};
