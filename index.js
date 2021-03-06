import tmpl from "./template.hbs";
import "./styles.css";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";
let success = new Audio(require("./sounds/success.mp3"));
let fail = new Audio(require("./sounds/fail.mp3"));
let close = new Audio(require("./sounds/close.mp3"));
import "animate.css";

const keyLayout = [
  {
    name: "Q",
  },
  {
    name: "W",
  },
  {
    name: "E",
  },
  {
    name: "R",
  },
  {
    name: "T",
  },
  {
    name: "Y",
  },
  {
    name: "U",
  },
  {
    name: "I",
  },
  {
    name: "O",
  },
  {
    name: "P",
    newLine: true,
  },
  {
    name: "A",
  },
  {
    name: "S",
  },
  {
    name: "D",
  },
  {
    name: "F",
  },
  {
    name: "G",
  },
  {
    name: "H",
  },
  {
    name: "J",
  },
  {
    name: "K",
  },
  {
    name: "L",
    newLine: true,
  },
  {
    name: "Z",
  },
  {
    name: "X",
  },
  {
    name: "C",
  },
  {
    name: "V",
  },
  {
    name: "B",
  },
  {
    name: "N",
  },
  {
    name: "M",
  },
];

let text = "";

const keyboardMarkup = createKeyboardMarkup(keyLayout);
const keyboardContainer = document.querySelector(".keyboard");
const symbolHolder = document.querySelector(".symbol-holder");
const btnClose = document.querySelector(".button-close");
const wrapper = document.querySelector(".wrapper");
keyboardContainer.insertAdjacentHTML("beforeend", keyboardMarkup);
symbolHolder.insertAdjacentHTML("beforeend", makeSymbol());

function createKeyboardMarkup(keyLayout) {
  return tmpl(keyLayout);
}

// random symbol
function makeSymbol() {
  const possible = "abcdefghijklmnopqrstuvwxyz";

  for (let i = 0; i < 1; i++)
    text = possible
      .charAt(Math.floor(Math.random() * possible.length))
      .toUpperCase();
  return text;
}

// upd symbolHolder
function updSymbolHolder() {
  symbolHolder.innerHTML = "";
  symbolHolder.insertAdjacentHTML("beforeend", makeSymbol());
  symbolHolder.style.backgroundColor = `rgb(${getRandom(200, 255)}, ${getRandom(
    200,
    255
  )}, ${getRandom(200, 255)})`;

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
// ---
btnClose.addEventListener("click", onClose);
function onClose() {
  wrapper.classList.add("wrapper--hidden");

  Swal.fire({
    title: "Start game",
    showClass: {
      popup: "animate__animated animate__fadeInDown",
    },
    hideClass: {
      popup: "animate__animated animate__fadeOutUp",
    },
    didClose: function () {
      wrapper.classList.remove("wrapper--hidden");
    },
  });
  close.play();
}
