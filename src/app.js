/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let cardsValues = ["A",2", "3", "4","6","7","J","Q","K"] 
  let cardsTypes = ["♦", "♥", "♠", "♣"]
  let cardsValueElement = document.getElementById("cardValue");
  let cardsTypeTopElement = document.getElementById("cardTypeTop");
  let cardsTypeBottomElement = document.getElementById("cardTypeBottom");

  function getRandomCard() {
    let randomValueIndex = Math.floor(math.random() * cardsValues.length); 
    let randomValue =cardsValues[randomValueIndex];
    cardsTypesTopElement.textContent = randomTypes;
    cardsTypeBottomElement.textContent = randomTypes;
    cardValueelement.textContent = randomValue;

    if (randomTypes == "♦") {
      cardsTypeTopElement.style.color = "red";
      
    }
  
  }

};
