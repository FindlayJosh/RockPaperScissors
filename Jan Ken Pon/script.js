document.querySelector(".rock").addEventListener("click", clickRock);

document.querySelector(".paper").addEventListener("click", clickPaper);

document.querySelector(".scissors").addEventListener("click", clickScissors);

let challengerSelection = ["rock", "paper", "scissors"];

let challengerScore = 0;

let playerScore = 0;

function clickRock() {
  let randomSelection = Math.floor(Math.random() * 3); /* Math.round(Math.random() * 'maxnumber - 1') */

  if (challengerSelection[randomSelection] === "rock") {
    document.querySelector(".battleResults").innerText = "Draw, GG";
  } else if (challengerSelection[randomSelection] === "paper") {
    document.querySelector(".battleResults").innerText = "Tuff, got clapped";
    challengerScore++;
    document.querySelector(".challenger").innerText = challengerScore;
  } else if (challengerSelection[randomSelection] === "scissors") {
    document.querySelector(".battleResults").innerText = "Nice Dub Boss Man";
    playerScore++;
    document.querySelector(".player").innerText = playerScore;
  }
}
function clickPaper() {
  let randomSelection = Math.floor(Math.random() * 3);

  if (challengerSelection[randomSelection] === "rock") {
    document.querySelector(".battleResults").innerText = "Nice Dub Boss Man";
    playerScore++;
    document.querySelector(".player").innerText = playerScore;
  } else if (challengerSelection[randomSelection] === "paper") {
    document.querySelector(".battleResults").innerText = "Draw, GG";
  } else if (challengerSelection[randomSelection] === "scissors") {
    document.querySelector(".battleResults").innerText = "Tuff, Got Clapped";
    challengerScore++;
    document.querySelector(".challenger").innerText = challengerScore;
  }
}

function clickScissors() {
  let randomSelection = Math.floor(Math.random() * 3);

  if (challengerSelection[randomSelection] === "paper") {
    document.querySelector(".battleResults").innerText = "Nice Dub Boss Man";
    playerScore++;
    document.querySelector(".player").innerText = playerScore;
  } else if (challengerSelection[randomSelection] === "scissors") {
    document.querySelector(".battleResults").innerText = "Draw, GG";
  } else if (challengerSelection[randomSelection] === "rock") {
    document.querySelector(".battleResults").innerText = "Tuff, Got Clapped";
    challengerScore++;
    document.querySelector(".challenger").innerText = challengerScore;
  }
}
