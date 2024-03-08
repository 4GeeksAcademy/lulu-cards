
let palos = ["corazon", "diamante", "pica", "trebol"];
let valores = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];

let simboloArriba = document.querySelector("#simboloArriba");
let numero = document.querySelector("#numero");
let simboloAbajo = document.querySelector("#simboloAbajo");

function eleccionCarta(arr1, arr2) {
  let carta = [];
  carta.push(arr1[Math.floor(Math.random() * arr1.length)]);
  carta.push(arr2[Math.floor(Math.random() * arr2.length)]);
  return carta;
}
function asignarColor(arr) {
  if (arr[0] === "corazon" || arr[0] === "diamante") {
    simboloArriba.style.color = "red";
    numero.style.color = "red";
    simboloAbajo.style.color = "red";
  } else {
    simboloArriba.style.color = "black";
    numero.style.color = "black";
    simboloAbajo.style.color = "black";
  }
}
function asignarPalo(arr) {
  if (arr[0] === "corazon") {
    simboloArriba.innerHTML = "♥";
    simboloAbajo.innerHTML = "♥";
  } else if (arr[0] === "diamante") {
    simboloArriba.innerHTML = "♦";
    simboloAbajo.innerHTML = "♦";
  } else if (arr[0] === "trebol") {
    simboloArriba.innerHTML = "♣";
    simboloAbajo.innerHTML = "♣";
  } else {
    simboloArriba.innerHTML = "♠";
    simboloAbajo.innerHTML = "♠";
  }
}
function asignarValor(arr) {
  numero.innerHTML = arr[1];
}
function generacionCarta() {
  let carta = eleccionCarta(palos, valores);
  asignarColor(carta) = red;
  asignarPalo(carta);
  asignarValor(carta);
  
}
let cartaContainer = document.getElementById("cartaContainer");

window.onload = function() {
  generacionCarta();
};
