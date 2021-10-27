import tmpl from "./template.hbs";
import "./styles.css";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";
let success = new Audio(require("./sounds/success.mp3"));
let fail = new Audio(require("./sounds/fail.mp3"));

const keyLayout = [
  {
    name: "q",
  },
  {
    name: "w",
  },
  {
    name: "e",
  },
  {
    name: "r",
  },
  {
    name: "t",
  },
  {
    name: "y",
  },
  {
    name: "u",
  },
  {
    name: "i",
  },
  {
    name: "o",
  },
  {
    name: "p",
    newLine: true,
  },
  {
    name: "a",
  },
  {
    name: "s",
  },
  {
    name: "d",
  },
  {
    name: "f",
  },
  {
    name: "g",
  },
  {
    name: "h",
  },
  {
    name: "j",
  },
  {
    name: "k",
  },
  {
    name: "l",
    newLine: true,
  },
  {
    name: "z",
  },
  {
    name: "x",
  },
  {
    name: "c",
  },
  {
    name: "v",
  },
  {
    name: "b",
  },
  {
    name: "n",
  },
  {
    name: "m",
  },
];

let text = "";

const keyboardMarkup = createKeyboardMarkup(keyLayout);
const keyboardContainer = document.querySelector(".keyboard");
const symbolHolder = document.querySelector(".symbol-holder");
keyboardContainer.insertAdjacentHTML("beforeend", keyboardMarkup);
symbolHolder.insertAdjacentHTML("beforeend", makeSymbol());

function createKeyboardMarkup(keyLayout) {
  return tmpl(keyLayout);
}

// random symbol
function makeSymbol() {
  const possible = "abcdefghijklmnopqrstuvwxyz";

  for (let i = 0; i < 1; i++)
    text = possible.charAt(Math.floor(Math.random() * possible.length));
  return text;
}

// upd symbolHolder
function updSymbolHolder() {
  symbolHolder.innerHTML = "";
  symbolHolder.insertAdjacentHTML("beforeend", makeSymbol());
  symbolHolder.style.backgroundColor = `rgb(${getRandom(0, 255)}, ${getRandom(
    0,
    255
  )}, ${getRandom(0, 255)})`;

  function getRandom(min, max) {
    return Math.ceil(Math.random() * (max - min) + min);
  }
}

// ---
keyboardContainer.addEventListener("click", onClick);
function onClick(e) {
  if (e.target.textContent === text) {
    Swal.fire({
      title: "Great!",
      width: 500,
      padding: "3em",
      background: "rgba(175, 216, 240, 0.5)",
      confirmButtonText: "Next >",
      iconColor: "rgb(10, 88, 98)",
      didClose: function () {
        updSymbolHolder();
      },
    });
    success.play();
  } else {
    fail.play();
  }
}
